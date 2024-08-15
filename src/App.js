import React, { useState } from "react";
import AddShoes from "./components/Shoes/AddShoes";
import ShoeTable from "./components/Shoes/ShoeTable";
import Header from "./components/Layouts/Header";
import Cart from "./components/Cart/Cart";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header onShow={handleShow} />
      <Cart show={show} onShow={handleShow} onClose={handleClose} />
      <AddShoes />
      <ShoeTable />
    </>
  );
}

export default App;
