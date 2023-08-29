import React from "react";
import productImage from "../../../Assets/img/DispenserPlastico.jpeg";

function CardImage() {
    return (
        <div class="product-image">
            <img src={productImage} alt="Product Name"/>
        </div>
    )
}

export default CardImage