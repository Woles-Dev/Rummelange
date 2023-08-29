import React from "react";
import '../Assets/css/main.css';
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import Banner from "./components/Banner";

function Main() {
    return (
    <main>

        <Banner/>

        {/* 
        Product container with card and Sidebar 
        

        <Sidebar/>
        <div class="card-container">
            <Products/>
            
        </div>

        */}
    </main>
    )
}

export default Main