import React, { useContext, useRef } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const ShoeTable = () => {
  const largeRefs = useRef([]);
  const mediumRefs = useRef([]);
  const smallRefs = useRef([]);
  const shoeClickHandler = (shoe, index) => {
    if(largeRefs.current[index].value == 0 && mediumRefs.current[index].value == 0 && smallRefs.current[index].value == 0){
      alert('Please add quanitities');
      return;
    }
    cartCtx.addToCart({
      id: shoe._id,
      name: shoe.name,
      price: shoe.price,
      largeQuantity: Number(largeRefs.current[index].value),
      mediumQuantity: Number(mediumRefs.current[index].value),
      smallQuantity: Number(smallRefs.current[index].value),
    });
    largeRefs.current[index].value = 0;
    mediumRefs.current[index].value = 0;
    smallRefs.current[index].value = 0;
  };
  const cartCtx = useContext(CartContext);
  const shoes = cartCtx.shoes;

  return (
    <Container className="table-responsive mt-3">
      <Table striped bordered hover size="sm" className="no-wrap-table">
        <thead>
          <tr>
            <th>Name</th>
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
            <tr key={shoe._id}>
              <td>{shoe.name}</td>
              <td>{shoe.description}</td>
              <td>{shoe.price}</td>
              <td>
                <Form.Control
                  type="number"
                  min="0"
                  defaultValue={0}
                  ref={(el) => (largeRefs.current[index] = el)}
                  style={{ width: "60px", display: "inline-block" }}
                />
                <span className="d-inline">/ {shoe.largeQuantity}</span>
              </td>
              <td>
                <Form.Control
                  type="number"
                  min="0"
                  defaultValue={0}
                  ref={(el) => (mediumRefs.current[index] = el)}
                  style={{ width: "60px", display: "inline-block" }}
                />
                <span className="d-inline">/ {shoe.mediumQuantity}</span>
              </td>
              <td>
                <Form.Control
                  type="number"
                  min="0"
                  defaultValue={0}
                  ref={(el) => (smallRefs.current[index] = el)}
                  style={{ width: "60px", display: "inline-block" }}
                />
                <span className="d-inline">/ {shoe.smallQuantity}</span>
              </td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => shoeClickHandler(shoe, index)}
                >
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
