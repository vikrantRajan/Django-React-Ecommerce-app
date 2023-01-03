import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';

const ProductPage = () => {
  
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  
  const fetchProduct = async () => {
    const {data} = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
    setProduct(data)
  }

    useEffect(() => {  fetchProduct() 
      // eslint-disable-next-line 
    }, [])


  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col md={6}>
        <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={6}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} Reviews`} color={'#f8e825'} />
                </ListGroup.Item>
                <ListGroup.Item>
                    <h3>${product.price}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>{product.description}</p>
                </ListGroup.Item>
                {product.countInStock > 0 ?  <Button className='btn-block bg-dark text-light mt-5' type='button'>Add To Cart</Button>  : <ListGroup.Item className='py-3 text-center' variant="danger">
                <Row>
                    <Col className='text-danger'>Out Of Stock</Col>
                </Row>
            </ListGroup.Item> }
                
            </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ProductPage
