import React from "react";


export default function Cart ({ cart, setCart }) {

    function handleCart () {
        setCart ({

        })
    }

    return (
        <div>
            <p>{Items.name}</p>
            <p>{Items.price}</p>
            <button onClick={handleCart}>Decrease quantity (-)</button>
            <button onClick={handleCart}>Increase quantity (+)</button>
            <button onClick={handleCart}>Delete from Cart</button>
        </div>
    )