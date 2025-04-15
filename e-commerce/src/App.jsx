import React, { useState } from "react";
import { Items as ItemsArray } from "./data"
import Cart from "./Cart";
import ItemCard from "./ItemCard";

export default function App () {
  const [cart, setCart] = useState ("ItemsArray")

  return (
    <div>
    <ItemCard/>
    <Cart cart={cart} setCart={setCart}/>
    </div>
  )
}