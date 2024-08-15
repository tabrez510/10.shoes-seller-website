import React, { useContext } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const CartModal = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items.reduce(
    (acc, item) =>
      acc +
      item.price *
        (item.largeQuantity + item.mediumQuantity + item.smallQuantity),
    0
  );
  const placeOrderHandler = () => {
    cartCtx.placeOrder();
    props.onClose();
    alert('Order Placed!');
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onClose}
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table responsive size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>L</th>
              <th>M</th>
              <th>S</th>
              <th>Total Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartCtx.items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                largeQuantity={item.largeQuantity}
                mediumQuantity={item.mediumQuantity}
                smallQuantity={item.smallQuantity}
                price={item.price}
              />
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <h5>Total: {totalAmount.toFixed(2)}</h5>
        {totalAmount > 0 && <Button variant="success" onClick={placeOrderHandler}>
          Place Order
        </Button>}
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
