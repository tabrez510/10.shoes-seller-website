import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Button,
  Badge,
} from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar
      expand="sm"
      sticky="top"
      bg="dark"
      data-bs-theme="dark"
      className="shadow-lg"
    >
      <Container>
        <Navbar.Brand>Shoe Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shoe Admin</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="mx-auto">
              <Nav.Link>
                <Button variant="primary" onClick={props.onShow}>
                  Cart <Badge bg="dark">0</Badge>
                </Button>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
