import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Message from '../components/Message';
import { cartAddItem, cartRemoveItem } from '../redux/slices/cartSlice';
import '../styles/shoppingCartPage.scss';

function CartPage () {
  // function useQuery ( paramName ) {
  //   const { search } = useLocation();
  //   const getter = React.useMemo( () => new URLSearchParams( search ), [ search ] );
  //   return getter.get( paramName )
  // }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cart } = useSelector( ( state ) => state.cart )

  const addProduct = (e, item) => {
    let newItem = {}
    console.log()
    for (const [key, value] of Object.entries(item)) newItem[key] = key === 'qty' ? Number(e) : value
    dispatch(cartAddItem(newItem))
  }

  const removeFromCart = (id) => {
    dispatch(cartRemoveItem(id))
  }
  
  const checkOut = () => {
    navigate('/login?redirect=shipping')
  }

  useEffect( () => {
    // if (id) dispatch(cartAddItem(id, qty))
  }, [cart] )

  return (
    <Row>
      <Col md={ 8 }>
        <h1 className='my-5'>Shopping Cart</h1>
        { cart.length === 0 ? ( <Message variant='info' classnames='mt-5 text-center text-bold'>Your Cart Is Empty! <Link to='/'>Go Back</Link></Message> )
          : (
            <ListGroup variant='flush' className='shopping-cart-box'>
              {cart.map( item => (
                <ListGroup.Item key={ item._id }>
                  <Row>
                    <Col md={ 2 }>
                      <Image src={ item.image } alt={ item.name } fluid rounded />
                    </Col>
                    <Col md={ 3 }>
                      <h6>
                        <Link to={ `/product/${ item._id }` }>{ item.name }</Link>
                      </h6>
                    </Col>
                    <Col md={ 2 }>
                      <h6>${ item.price }</h6>
                    </Col>
                    <Col md={ 3 }>
                      <Form.Control
                        as="select"
                        value={ item.qty }
                        onChange={ ( e ) => addProduct( Number(e.target.value), item ) }>

                        {
                          [ ...Array( item.countInStock ).keys() ].map( ( x ) => (
                            <option key={ x + 1 } value={ x + 1 }>
                              {x + 1 }
                            </option>
                          ) )
                        }
                      </Form.Control>
                    </Col>
                    <Col md={ 1 }>
                    <Button
                        type='button'
                        variant='light'  
                        onClick={() => removeFromCart(item._id)}
                    ><i className='fas fa-trash'></i></Button>
                    </Col>
                  </Row>
                </ListGroup.Item>

              ) ) }
            </ListGroup>
          ) }
      </Col>
      <Col md={ 4 }>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>Subtotal ({cart.reduce((acc, item) => acc + item.qty, 0)}) Items</h4>
              <h6 className='mt-2'>${cart.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h6>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button type='button' className='bg-dark btn-block' disabled={cart.length===0} onClick={checkOut}>
               Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartPage
