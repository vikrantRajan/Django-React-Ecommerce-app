import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import "./styles/app.scss";
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ 
        <>
        <Header/> 
        <main>
          <Container className="py-3">
            <HomePage/>
          </Container>
        </main>
        <Footer/>
        </>
      }
      />
    </Routes>
    </>
  );
}

export default App;
