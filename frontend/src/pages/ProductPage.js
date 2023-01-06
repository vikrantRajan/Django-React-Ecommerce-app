import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from '../components/Rating';
import { cartAddItem } from '../redux/slices/cartSlice';
import { productDetailsFetch } from '../redux/slices/productDetailsSlice';
import '../styles/productPage.scss';

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  let { id } = useParams();
  const [ product, setProduct ] = useState( [] );
  const [ qty, setQty ] = useState( 1 );
  const productDetails = useSelector( ( state ) => state.productDetails )
  const { isError, isLoading, isSuccess } = productDetails


  useEffect( () => {
    dispatch( productDetailsFetch( id ) )
    if ( isSuccess ) setProduct( productDetails.product.data )

  }, [ dispatch, isSuccess, isError, isLoading, productDetails.product.data, id ] )

  const addToCartHandler = (prod, q) => {
    let payload = {...prod, qty: q}
    if (Number(id) === prod._id) dispatch(cartAddItem(payload))
    navigate(`/cart/${id}?qty=${qty}`)
  }

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      {isLoading && !isError && !isSuccess ? <Loader /> : '' }
      {isError && !isSuccess ? <Message variant='danger' classnames='mt-5 text-center'>There seems to be an error, please try again later</Message>
        : ( <Row>
          <Col md={ 6 }>
            <Image src={ product.image } alt={ product.name } fluid />
          </Col>
          <Col md={ 6 }>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{ product.name }</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={ product.rating } text={ `${ product.numReviews } Reviews` } color={ '#f8e825' } />
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>${ product.price }</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{ product.description }</p>
              </ListGroup.Item>
              { product.countInStock > 0 ? ( 

                  <ListGroup.Item>
                    <Row>
                      <Col className='shopping-cart'>
                      {
                        qty > 0 ? (
                          <Button className='btn-block bg-dark text-light' type='button' onClick={e => addToCartHandler(product, qty)}>
                            <i className="fas fa-shopping-cart"></i> 
                          </Button> ) 
                        : (
                            <Button disabled className='btn-block bg-grey text-light' type='button' onClick={e => addToCartHandler(product, qty)}>
                              <i className="fas fa-shopping-cart"></i> 
                            </Button> 
                          )
                        
                      }
                        
                      </Col>

                      <Col className='shopping-cart'>
                        <h6>Select An Option</h6>
                        <Form.Control
                          as="select"
                          value={ qty }
                          onChange={ ( e ) => setQty( e.target.value ) }>

                          {
                            [ ...Array( product.countInStock ).keys() ].map( ( x ) => (
                              <option key={ x + 1 } value={ x + 1 }>
                                {x + 1 }
                              </option>
                            ) )
                          }
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                
                ) : <Message variant='danger' classnames='text-center'>Out Of Stock</Message>}


            </ListGroup>
          </Col>
        </Row> )
      }
    </div>
  )
}

export default ProductPage
