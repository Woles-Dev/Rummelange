import React from "react";
import "../../Assets/css/banner.css"
import { Link } from 'react-router-dom'
import bannerImage from "../../Assets/img/JuegoBaño.jpeg";

function Banner() {
    return (
            <div className="banner">
                <div class="row">
                        <div class="category">
                            <div class="thumb">
                                        <div class="inner-content">
                                            <h4>Women</h4>
                                            <span>Best Clothes For Women</span>
                                        </div>
                                        <div class="hover-content">
                                            <div class="inner">
                                                <h4>Women</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div class="main-border-button">
                                                    <Link to="#">Discover More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={bannerImage} alt="accesories"/>
                                    </div>
                                </div>
                            </div>
            </div>
        )
}

export default Banner