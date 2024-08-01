import React from "react";
import './header.css';

function Header({onViewChange}) {
    return (
        <header className="header">
            <div className="logo App-logo"><img src="logo.webp" alt="Logo" /></div>
            <nav>
                <ul>
                    <li><a  onClick={()=> onViewChange('list')} > Inicio</a></li>
                    <li>Contactanos</li>
                    <li>Productos</li>
                    <li>Ofertas</li>
                    <li>
                        <a  onClick={()=> onViewChange('cart')} ><img className="carrito" src="carrito2.svg" alt="Carrito" /></a>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
}

export default Header;