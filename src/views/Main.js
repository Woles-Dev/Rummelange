import React from "react";
import '../Assets/css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from '../logo.svg';

function Main() {
    return (
    <main>
        <div class="product-container">
            <img src={logo} alt="img-product" class="img-product" />
             <div class="overlay">
                <div class = "items"></div>
                    <div class = "items head">
                        <p>Flower Embroidery Hoop Art</p>
                    </div>
                <div class = "items price">
                    <p class="old">$699</p>
                    <p class="new">$345</p>
                </div>
                <div class="items cart">
                    <FontAwesomeIcon icon={faCartShopping} class="cart-i"/>
                    <span>ADD TO CART</span>
                </div>
            </div>
        </div>
        
    </main>
    )
}

export default Main