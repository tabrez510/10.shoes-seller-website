import React, { useContext, useState, useEffect } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [shoes, setShoes] = useState([]);
  const cartApiUrl =
    "https://crudcrud.com/api/e5dde1007ad04015b04e265e242fccd9/carts";
  const shoesApiUrl =
    "https://crudcrud.com/api/e5dde1007ad04015b04e265e242fccd9/shoes";

  const getCartItems = async () => {
    const res = await fetch(cartApiUrl);
    const data = await res.json();
    setItems(data);
  };

  const getShoes = async () => {
    const res = await fetch(shoesApiUrl);
    const data = await res.json();
    setShoes(data);
  };

  useEffect(() => {
    getCartItems();
    getShoes();
  }, []);

  const addToCart = async (item) => {
    try {
      const existingShoe = shoes.find((shoeItem) => shoeItem._id === item.id);
      const updatedShoe = {
        ...existingShoe,
        largeQuantity: existingShoe.largeQuantity - item.largeQuantity,
        mediumQuantity: existingShoe.mediumQuantity - item.mediumQuantity,
        smallQuantity: existingShoe.smallQuantity - item.smallQuantity,
      };

      if (
        updatedShoe.largeQuantity < 0 ||
        updatedShoe.mediumQuantity < 0 ||
        updatedShoe.smallQuantity < 0
      ) {
        alert("Please descrease quantity");
        return;
      }
      const existingCartItem = items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          largeQuantity: existingCartItem.largeQuantity + item.largeQuantity,
          mediumQuantity: existingCartItem.mediumQuantity + item.mediumQuantity,
          smallQuantity: existingCartItem.smallQuantity + item.smallQuantity,
        };

        await fetch(`${cartApiUrl}/${existingCartItem._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: updatedItem.id,
            name: updatedItem.name,
            price: updatedItem.price,
            largeQuantity: updatedItem.largeQuantity,
            mediumQuantity: updatedItem.mediumQuantity,
            smallQuantity: updatedItem.smallQuantity,
          }),
        });

        setItems((prevItems) =>
          prevItems.map((cartItem) =>
            cartItem.id === item.id ? updatedItem : cartItem
          )
        );
      } else {
        const res = await fetch(cartApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });

        const addedItem = await res.json();
        setItems((prevItems) => [...prevItems, addedItem]);
      }

      // Reduce quantities in the shoes database

      await fetch(`${shoesApiUrl}/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: updatedShoe.name,
          description: updatedShoe.description,
          price: updatedShoe.price,
          largeQuantity: updatedShoe.largeQuantity,
          mediumQuantity: updatedShoe.mediumQuantity,
          smallQuantity: updatedShoe.smallQuantity,
        }),
      });

      // Update the shoes state after modifying a shoe
      setShoes((prevShoe) =>
        prevShoe.map((shoeItem) =>
          shoeItem._id === updatedShoe._id ? updatedShoe : shoeItem
        )
      );
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const itemToRemove = items.find((cartItem) => cartItem.id === id);

      if (itemToRemove) {
        await fetch(`${cartApiUrl}/${itemToRemove._id}`, {
          method: "DELETE",
        });

        setItems((prevItems) =>
          prevItems.filter((cartItem) => cartItem.id !== id)
        );

        // const res = await fetch(`${shoesApiUrl}/${id}`);
        const shoeItem = shoes.find((shoeItem) => shoeItem._id === id);

        const updatedShoe = {
          ...shoeItem,
          largeQuantity: shoeItem.largeQuantity + itemToRemove.largeQuantity,
          mediumQuantity: shoeItem.mediumQuantity + itemToRemove.mediumQuantity,
          smallQuantity: shoeItem.smallQuantity + itemToRemove.smallQuantity,
        };

        await fetch(`${shoesApiUrl}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: updatedShoe.name,
            description: updatedShoe.description,
            price: updatedShoe.price,
            largeQuantity: updatedShoe.largeQuantity,
            mediumQuantity: updatedShoe.mediumQuantity,
            smallQuantity: updatedShoe.smallQuantity,
          }),
        });

        // Update the shoes state after modifying a shoe
        setShoes((prevShoe) =>
          prevShoe.map((shoeItem) =>
            shoeItem._id === updatedShoe._id ? updatedShoe : shoeItem
          )
        );
      }
    } catch (error) {
      console.error("Failed to remove item from cart:", error);
    }
  };

  const addNewShoe = async (shoe) => {
    try {
      const res = await fetch(shoesApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shoe),
      });

      const addedShoe = await res.json();
      setShoes((prevShoes) => [...prevShoes, addedShoe]);
    } catch (error) {
      console.error("Failed to add new shoe:", error);
    }
  };

  const placeOrder = async () => {
    try {
      setItems([]);

      await Promise.all(
        items.map((item) =>
          fetch(`${cartApiUrl}/${item._id}`, {
            method: "DELETE",
          })
        )
      );
    } catch (error) {
      console.error("Failed to place order:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, shoes, addNewShoe, placeOrder }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
