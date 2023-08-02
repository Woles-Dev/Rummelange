import React from "react";
import '../Assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer class="footer-distributed">

        <div class="footer-left">
            <h3>RUMME<span>LANGE</span></h3>
            <p class="footer-links">
                <Link to="#" class="link-1">Inicio</Link>
                <Link to="#">Local</Link>
            </p>
            <p class="footer-company-name">Created by Woles Dev © 2023</p>
        </div>

        <div class="footer-center">
            <div>
                <FontAwesomeIcon icon={faMap} class="icons" />
                <p><span>Av. SiempreViva</span> 123, Springfield</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faPhone} class="icons" />
                <p>+911 5555-5555</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faEnvelope} class="icons" />
                <p><Link to="mailto:support@company.com">support@company.com</Link></p>
            </div>
    </div>

    <div class="footer-right">
        <p class="footer-company-about">
        <span>About the company</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
        
        <div class="footer-icons">
            <Link to="#"><FontAwesomeIcon icon={faFacebook} class="icons" /></Link>
            <Link to="#"><FontAwesomeIcon icon={faInstagram} class="icons" /></Link>
            <Link to="#"><FontAwesomeIcon icon={faLinkedin} class="icons" /></Link>
            <Link to="#"><FontAwesomeIcon icon={faGithub} class="icons" /></Link>
        </div>

    </div>

    </footer>
    )
}


export default Footer;