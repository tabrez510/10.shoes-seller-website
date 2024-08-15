import React, {useContext, useRef} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CartContext from '../../store/cart-context';

const AddShoes = () => {
  const cartCtx = useContext(CartContext);
  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const largeRef = useRef();
  const mediumRef = useRef();
  const smallRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      name: nameRef.current.value,
      description: descRef.current.value,
      price: Number(priceRef.current.value),
      largeQuantity: Number(largeRef.current.value),
      mediumQuantity: Number(mediumRef.current.value),
      smallQuantity: Number(smallRef.current.value)
    }
    cartCtx.addNewShoe(data);
    nameRef.current.value = '';
    descRef.current.value = '';
    priceRef.current.value = '';
    largeRef.current.value = '';
    mediumRef.current.value = '';
    smallRef.current.value = '';
  }
  return (
    <Container className="mt-5">
      <Form onSubmit={formSubmitHandler}>
        <Row className="mb-3">
          <Col xs={12} md={4}>
            <Form.Group controlId="formShoeName">
              <Form.Label>Shoe Name</Form.Label>
              <Form.Control type="text" placeholder="Enter shoe name" ref={nameRef} />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" ref={descRef} />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter price" ref={priceRef} />
            </Form.Group>
          </Col>
        </Row>
        
        <Row className="mb-3">
          <Col xs={12}>
            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity Available</Form.Label>
            </Form.Group>
          </Col>
          <Col xs={12} sm={4}>
            <Form.Group controlId="formLargeQuantity">
              <Form.Control type="number" placeholder="Large" ref={largeRef} />
            </Form.Group>
          </Col>
          <Col xs={12} sm={4}>
            <Form.Group controlId="formMediumQuantity">
              <Form.Control type="number" placeholder="Medium" ref={mediumRef} />
            </Form.Group>
          </Col>
          <Col xs={12} sm={4}>
            <Form.Group controlId="formSmallQuantity">
              <Form.Control type="number" placeholder="Small" ref={smallRef} />
            </Form.Group>
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center">
            <Button variant="primary" type="submit">
              Add Shoe
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddShoes;
