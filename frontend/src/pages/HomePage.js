import axios from 'axios';
import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from '../components/Product';
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const {data} = await axios.get('http://127.0.0.1:8000/api/products/')
    setProducts(data)
  }
  useEffect(() => {

    fetchProducts()

  }, [])
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
      {products.map(product => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
        </Col>
      ))}
      </Row>
    </div>
  )
}

export default HomePage
