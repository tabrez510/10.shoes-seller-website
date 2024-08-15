import React from "react"


const CartContext = React.createContext({
    items: [],
    addToCart: (item) => {},
    removeFromCart: (id) => {},
    shoes: [],
    AddNewShoe: (shoe) => {},
    placeOrder: () => {}
});

export default CartContext;