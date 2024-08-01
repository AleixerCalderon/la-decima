import React from "react";

function Cart({cart}) {
    const total = cart.reduce((acc,item) => acc + item.price, 0);
    return (
        <div className="cart">
            <h2>Tu Carrito</h2>
            {cart.length === 0? (
                <p>No tiene producto</p>
            ): (
                <div>
                    <ul>
                        {cart.map((item, index)=>(
                            <li key={index}>
                             {item.nameItem} - ${item.price}
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${total}</p>
                    <button>Proceder al Pago</button>
                </div>
            )}
        </div>
    );
}

export default Cart;