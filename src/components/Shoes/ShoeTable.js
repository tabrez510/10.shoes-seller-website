import React from "react";
import {Container, Table, Form, Button } from "react-bootstrap";

const ShoeTable = () => {
  const shoes = [
    {
      name: "Running Shoe",
      description: "Comfortable running shoe",
      price: "$100",
      large: 10,
      medium: 15,
      small: 5,
    },
    {
      name: "Basketball Shoe",
      description: "High-top basketball shoe",
      price: "$150",
      large: 20,
      medium: 10,
      small: 8,
    },
    // Add more dummy data as needed
  ];

  return (
    <Container className="table-responsive mt-3">
      <Table striped bordered hover size="sm" className="no-wrap-table">
        <thead>
          <tr>
            <th>Shoe Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Large</th>
            <th>Medium</th>
            <th>Small</th>
            <th>Add To Cart</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map((shoe, index) => (
            <tr key={index}>
              <td>{shoe.name}</td>
              <td>{shoe.description}</td>
              <td>{shoe.price}</td>
              <td>
                <Form.Control
                  type="number"
                  defaultValue={shoe.large}
                  min="0"
                  style={{ width: "60px", display: "inline-block" }}
                />
                <span className="d-inline">/ {shoe.large}</span>
              </td>
              <td>
                <Form.Control
                  type="number"
                  defaultValue={shoe.medium}
                  min="0"
                  style={{ width: "60px", display: "inline-block" }}
                />
                <span className="d-inline">/ {shoe.large}</span>
              </td>
              <td>
                <Form.Control
                  type="number"
                  defaultValue={shoe.small}
                  min="0"
                  style={{ width: "60px", display: "inline-block" }}
                />
                <span className="d-inline">/ {shoe.large}</span>
              </td>
              <td>
                <Button variant="primary" size="sm">
                  Add To Cart
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ShoeTable;
