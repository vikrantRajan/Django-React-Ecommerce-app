import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from '../components/Product';
import products from '../data/products';
function HomePage() {
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
