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
 
            <div>{ productss }</div> 
            {/* <Products /> */}
            

        </main>
    )
}

export default Main