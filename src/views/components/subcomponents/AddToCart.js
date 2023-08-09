import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



function AddToCart() {
    return (
        <div>
                <div className="cart">
                    <FontAwesomeIcon icon={faCartShopping} class="cart-i"/>
                    <span class="btn btn-danger">ADD TO CART</span>
                </div>
        </div>
    )
}

export default AddToCart