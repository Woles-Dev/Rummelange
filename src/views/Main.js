import React from "react";
import '../Assets/css/main.css';
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";


function Main() {
    return (
    <main>
        <Sidebar/>
        <div class="card-container">
            <Products/>
            <Products/>
            <Products/>
            <Products/>
        </div>
    </main>
    )
}

export default Main