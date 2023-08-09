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
            <div className="product-card">
            <CardImage/>
            <CardHeadline/>
            <CardDescription/>
            <CardPrice/>
            <AddToCart/>
            </div>
        </div>
    )
}

export default Products