import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { cartAddItem } from './redux/slices/cartSlice';
import "./styles/app.scss";
function App () {
  const dispatch = useDispatch()
  
  // add cart items from local storage
  const {cart} = useSelector( ( state ) => state.cart )
  if (!cart.length || cart.length === 0) {
    const cartItemsFromStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    for (const item of cartItemsFromStorage) {
      dispatch(cartAddItem(item))
    }
  }

  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={ <HomePage /> } exact/>
            <Route path='/product/:id' element={ <ProductPage /> }/>
            <Route path='/cart/:id?' element={ <CartPage /> }/>
            <Route path="*" element={ <h3 className='text-center pt-5'>Sorry this page does not exist</h3> } />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
