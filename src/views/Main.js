import React from "react";
import '../Assets/css/main.css';
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import Card from "../productsCards/Card";
import { data } from "../productsCards/data"


function Main() {
    const productss = data.map(product => (
        <Card key={product.id} {...product} />
    ))
    
    return (
        <main>
            <Sidebar />

            <div className="product-container"> 
                { productss }
                {/* <Products /> */}
            </div>
            

        </main>
    )
}

export default Main