import React from "react";
import './header.css';

function Header() {
    return (
        <header className="header">
            <img className="logo" src="logo.webp" alt="Logo" />
            <nav>               
                <ul>
                    <li>Inicio</li>
                    <li>Contactanos</li>
                    <li>Productos</li>
                    <li>Ofertas</li>
                    <li>
                        <img className="carrito" src="carrito2.svg" alt="Logo" />
                    </li>
                </ul>
                
            </nav>
        </header>
    )
}

export default Header;