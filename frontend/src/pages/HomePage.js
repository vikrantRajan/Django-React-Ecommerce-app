import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { productFetch } from '../redux/slices/productSlice';
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const {product, isLoading, isSuccess, isError, message} = useSelector((state) => state.product)
  useEffect(() => { dispatch(productFetch()) }, [dispatch])
  useEffect(() => {
    if (isSuccess && product.data.length > 0) setProducts(() => (product.data))
  }, [product, isLoading, isSuccess, isError, message]);

  return (
    <div>
    {products.length > 0 ? <h1>Latest Products</h1> : <h3 className="pt-5 text-center">There seems to be an error, please try again later</h3>}
      
      <Row>
      { products.map(product => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
        </Col>
      )) }
      </Row>
    </div>
  )
}

export default HomePage
