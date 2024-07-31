import React from "react";
import './header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo"><img src="logo.webp" alt="Logo" /></div>
            <nav>               
                <ul>
                    <li>Inicio</li>
                    <li>Contactanos</li>
                    <li>Productos</li>
                    <li>Ofertas</li>
                    <li>
                        <a href="#"><img className="carrito" src="carrito2.svg" alt="Carrito" /></a>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
}

export default Header;