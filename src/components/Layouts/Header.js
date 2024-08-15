import React, { useContext } from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Button,
  Badge,
} from "react-bootstrap";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  
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
                  Cart <Badge bg="dark">{cartCtx.items.length}</Badge>
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
