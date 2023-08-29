import React from "react";
import '../Assets/css/navbar.css';
import FixLogin from "./Fixed-Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
    
    <header class="header">
		<h1 class="logo"><Link to="#">Rumme<span>lange</span></Link></h1>
        <div class="search-container">
            <input type="text" name="search" placeholder="Search..." class="search-input"/>
            
                <Link to="#" class="search-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} class="fas fa-search"/>
                </Link>

        </div>
        <ul class="main-nav">
            <li><Link to="#">Inicio</Link></li>
            <li><Link to="#">Local</Link></li>
            <li class="login">
                <Link to="#" >Acceder</Link>
                <FixLogin />
            </li>
            
            <li><Link to="#"> <FontAwesomeIcon icon={faCartShopping} /> </Link></li>
        </ul>
        <ul class="bars">
        <li><Link to="#"> <FontAwesomeIcon icon={faBars} /> </Link></li>
        </ul>
	</header> 
    )
}

export default NavBar