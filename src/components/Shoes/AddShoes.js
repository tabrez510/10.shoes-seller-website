import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const AddShoes = () => {
  return (
    <Container className="mt-5">
      <Form>
        <Row className="mb-3">
          <Col xs={12} md={4}>
            <Form.Group controlId="formShoeName">
              <Form.Label>Shoe Name</Form.Label>
              <Form.Control type="text" placeholder="Enter shoe name" />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter price" />
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
              <Form.Control type="number" placeholder="Large" />
            </Form.Group>
          </Col>
          <Col xs={12} sm={4}>
            <Form.Group controlId="formMediumQuantity">
              <Form.Control type="number" placeholder="Medium" />
            </Form.Group>
          </Col>
          <Col xs={12} sm={4}>
            <Form.Group controlId="formSmallQuantity">
              <Form.Control type="number" placeholder="Small" />
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
