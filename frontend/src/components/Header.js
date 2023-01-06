import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "../assets/logo-white.png";
import '../styles/header.scss';
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand ><img alt='vikrant rajan logo' src={ logo } style={{width: '25px'}} /></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={ { maxHeight: '100px' } }
              navbarScroll
            >
            <LinkContainer to="/" className='nav-item'>
            
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart" className='nav-item'>
              <Nav.Link  href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login" className='nav-item'>
              <Nav.Link href="/login"><i className="fas fa-user"></i> Login</Nav.Link>
            </LinkContainer>

                
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
