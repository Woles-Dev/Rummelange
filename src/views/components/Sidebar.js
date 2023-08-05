import React from "react";
import { Link } from 'react-router-dom'
import "../../Assets/css/Sidebar.css"



function Sidebar() {
    return (
        <aside class="sidebar">
        <ul class="side-list">
            <li class="link"><Link to="#"> Cestos</Link></li>
            <li class="link"><Link to="#"> Espejos</Link></li>
            <li class="link"><Link to="#"> Cortinas</Link></li>
            <li class="link"><Link to="#"> Toallas </Link></li>
            <li class="link"><Link to="#"> Aromaticos </Link></li>
        </ul>
    </aside>
    )
}

export default Sidebar