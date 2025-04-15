import React from "react";
import { Items } from "./data";

export default function ItemCard () {
    function AddToCart () {

    }
    return (
        <div>
            <div>
            <p>{Items.name}</p>
            <p>{Items.price}</p>
            <button onClick={AddToCart}>Add To Cart (+)</button>
            
        </div>
        </div>
    )
}