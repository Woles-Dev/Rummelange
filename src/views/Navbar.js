import React from "react";
import '../Assets/css/navbar.css';
import '../Assets/js/navbar.js';

function NavBar() {
    return (
    <header id="nav-wrapper">
        <nav id="nav">
            <div class="nav left">
                <span class="gradient"><h1 class="logo"><a href="#home">Logo Here</a></h1></span>
                <button id="menu" class="btn-nav"><span class="fas fa-bars"></span></button>
            </div>
            <div class="nav right">
                <a href="#home" class="nav-link active"><span class="nav-link-span"><span class="u-nav">Inicio</span></span></a>
                <a href="#local" class="nav-link"><span class="nav-link-span"><span class="u-nav">Local</span></span></a>
                <a href="#login" class="nav-link"><span class="nav-link-span"><span class="u-nav">LOGIN</span></span></a>
                <a href="#cart" class="nav-link"><span class="nav-link-span"><span class="u-nav"><i class="fa-regular fa-cart-shopping"></i></span></span></a>
            </div>
        </nav>
  </header>
    )
}

export default NavBar