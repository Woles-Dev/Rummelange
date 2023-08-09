import React from "react";
import logo from '../../../logo.svg';

function CardImage() {
    return (
        <div class="image">
            <img src={logo} width="200" class="img-product" alt="prod-img"/>
        </div>
    )
}

export default CardImage