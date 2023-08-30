import React from "react";
import CardDescription from "./subcomponents/CardDescription";
import CardPrice from "./subcomponents/CardPrice";
import CardImage from "./subcomponents/CardImage";
import CardHeadline from "./subcomponents/CardHeadline";
import AddToCart from "./subcomponents/AddToCart";
import "../../Assets/css/products.css"
import { data } from "../../productsCards/data"
import Card from "../../productsCards/Card";

function Products() {
    
    /* const productss = data.map(product => (
        <Card key={product.id} {...product}/>
    )) */
    return (
        <div class="product-container">
            <div className="product-card">
            <CardImage/>

                <div class="product-info">
                    <CardDescription/>
                    <CardHeadline/>
                    <CardPrice/>
                    <AddToCart/>
                </div>
            </div>
        </div>
    )
}

export default Products