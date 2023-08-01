import React from "react";
import '../Assets/css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
    <header class="header">
		<h1 class="logo"><Link to="#">Rumme<span>lange</span></Link></h1>
        <div class="search">
            <input type="text" placeholder="Buscar productos" class="searchInput"/> 
            <Link to="#"><FontAwesomeIcon icon={faMagnifyingGlass} class="searchIcon"/></Link>
        </div>
        <ul class="main-nav">
            <li><Link to="#">Inicio</Link></li>
            <li><Link to="#">Local</Link></li>
            <li><Link to="#">Login</Link></li>
            <li><Link to="#"> <FontAwesomeIcon icon={faCartShopping} /> </Link></li>
        </ul>
        <ul class="bars">
        <li><Link to="#"> <FontAwesomeIcon icon={faBars} /> </Link></li>
        </ul>
	</header> 
    )
}

export default NavBar