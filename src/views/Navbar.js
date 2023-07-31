import React from "react";
import '../Assets/css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
    <header class="header">
		<h1 class="logo"><a href="#">Rumme<span>lange</span></a></h1>
        <div class="search">
            <input type="text" placeholder="Buscar productos" class="searchInput"/> 
            <FontAwesomeIcon icon={faMagnifyingGlass} class="searchIcon"/>      
        </div>
        <ul class="main-nav">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Local</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#"> <FontAwesomeIcon icon={faCartShopping} /> </a></li>
        </ul>
        <ul class="bars">
        <li><a href="#"> <FontAwesomeIcon icon={faBars} /> </a></li>
        </ul>
	</header> 
    )
}

export default NavBar