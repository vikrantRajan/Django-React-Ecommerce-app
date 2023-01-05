import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from '../components/Rating';
import { productDetailsFetch } from '../redux/slices/productDetailsSlice';

const ProductPage = () => {
  const dispatch = useDispatch()
  let { id } = useParams();
  const [ product, setProduct ] = useState( [] );
  const productDetails = useSelector( ( state ) => state.productDetails )
  const { isError, isLoading, isSuccess } = productDetails


  useEffect( () => {
    dispatch( productDetailsFetch( id ) )
    if ( isSuccess ) setProduct( productDetails.product.data )

  }, [dispatch, isSuccess, isError, isLoading, productDetails.product.data, id] )


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
              { product.countInStock > 0 ? <Button className='btn-block bg-dark text-light mt-5' type='button'>Add To Cart</Button> : <ListGroup.Item className='py-3 text-center' variant="danger">
                <Row>
                  <Col className='text-danger'>Out Of Stock</Col>
                </Row>
              </ListGroup.Item> }

            </ListGroup>
          </Col>
        </Row> )
      }
    </div>
  )
}

export default ProductPage
