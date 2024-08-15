import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";


const CartItem = ({id, name, largeQuantity, mediumQuantity, smallQuantity, price}) => {
    const cartCtx = useContext(CartContext)
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{largeQuantity}</td>
      <td>{mediumQuantity}</td>
      <td>{smallQuantity}</td>
      <td>
        $
        {(
          price *
          (largeQuantity + mediumQuantity + smallQuantity)
        ).toFixed(2)}
      </td>
      <td>
        <Button
          variant="danger"
          size="sm"
          onClick={() => cartCtx.removeFromCart(id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
