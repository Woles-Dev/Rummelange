import React from "react";
import '../Assets/css/navbar.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function FixLogin() {
    return (


    <div className="fixed-login">
        <div className="container">        
                <div class="col">
                    <div class="img-login-form"><FontAwesomeIcon icon={faUser} class="userIcon"/> </div>
                    	<div class="form-top">                            
                        		<div class="form-top-left">
                        			<h3>Rummelange</h3>
                            		<p class="parrafo-hide">Ingresa tu email y contraseña:</p>
                        		</div>
                        	</div>
                            <div class="form-bottom">
			                    <form action="#" method="get" class="login-form">
			                    	<div class="form-group">
			                    		<span>Email </span>
			                        	<input type="text" name="username_login" placeholder="Email" class="form-username form-control" id="username_login"/>
			                        </div>
			                        <div class="form-group">
			                        	<span>Contraseña </span>
			                        	<input type="password" name="password_login" placeholder="Contraseña" class="form-password form-control" id="password_login"/>
			                        </div>
                                    <div class="password">
                                        <div class="password-remember">
                                            <input type="checkbox"/> Recordar contraseña 
                                        </div>
                                        <div class="password-recovery"> 
                                            <Link to="#"> Olvidaste la contraseña?</Link> 
                                        </div>
                                    </div>
			                        <input type="button" class="btn btnIn" value="Ingresa!"/>
			                    </form>
                                
		                    </div>
                        </div>
                    </div>
                    <div class="bottom-bottom-form">
                    <h3>No tenés una cuenta? <a href="register"> Registrate acá</a></h3>
                    
                    </div>
        </div>
    )
}



export default FixLogin