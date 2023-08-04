import React from "react";
import CardDescription from "./subcomponents/CardDescription";
import CardPrice from "./subcomponents/CardPrice";
import CardImage from "./subcomponents/CardImage";
import CardHeadline from "./subcomponents/CardHeadline";
import AddToCart from "./subcomponents/AddToCart";
import "../../Assets/css/products.css"

function Products() {
    return (
        <div class="product-container">
            <CardImage/>
            <CardHeadline/>
            <CardDescription/>
            <CardPrice/>
            <AddToCart/>
        </div>
    )
}

export default Products