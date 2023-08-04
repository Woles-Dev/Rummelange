import React from "react";
import { Link } from 'react-router-dom'
import "../../Assets/css/Sidebar.css"



function Sidebar() {
    return (
        <div class="sidebar-container">
            <ul class="side-nav">
            <li><Link to="#">Muebles</Link></li>
            <li><Link to="#">Espejos</Link></li>
            <li><Link to="#">Cortinas</Link></li>
            <li className="sub-list"><Link to="#">Cesto</Link>
                <ul className="sub-sidebar">
                <li><Link to="#">Cestos Basura</Link></li>
                <li><Link to="#">Cestos Guardado</Link></li>
                </ul>
            </li>
            <li>
                
            </li>

            </ul>    
        </div>
    )
}

export default Sidebar