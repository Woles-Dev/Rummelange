import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



function AddToCart() {
    return (
        <div class="cart">
            
            <button class="add-to-cart-btn">
            <FontAwesomeIcon icon={faCartShopping} class="cart-i"/> 
            <p>Add to Cart</p>
            </button>
        </div>
    )
}

export default AddToCart