import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Footer() {
  return (
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">Copyright &copy; Vikrant Rajan (Fullstack Software Developer)</Col>
          </Row>
        </Container>
      </footer>
  )
}

export default Footer
