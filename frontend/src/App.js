import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import "./styles/app.scss";
function App () {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={ <HomePage /> } exact/>
            <Route path='/product/:id' element={ <ProductPage /> }/>
            <Route path="*" element={ <h3 className='text-center pt-5'>Sorry this page does not exist</h3> } />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
