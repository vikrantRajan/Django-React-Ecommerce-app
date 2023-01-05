import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import { productListFetch } from '../redux/slices/productListSlice';



const HomePage = () => {

  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch()
  const {products, isLoading, isSuccess, isError, message} = useSelector((state) => state.productList)
  
  useEffect(() => { dispatch(productListFetch()) }, [dispatch])
  useEffect(() => {
    if (isSuccess && products.data.length > 0) setProductList(() => (products.data))
  }, [products, isLoading, isSuccess, isError, message]);


  return (
    <div>
    {isLoading ? <Loader /> : ''}
    {productList.length > 0 ? <h1>Latest Products</h1> : <Message variant='danger' classnames='mt-5 text-center'>There seems to be an error, please try again later</Message>}
      
      <Row>
      { productList.map(product => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
        </Col>
      )) }
      </Row>
    </div>
  )
}

export default HomePage
