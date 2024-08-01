import React from "react";
import './ProductItem.css';

function ProductItem({product, onViewChange}) {
    return(
        <div className="product-item">
            <img src={product.image} alt={product.nameItem} />
            <h3>{product.nameItem}</h3>
            <p>${product.price}</p>
            <button onClick={()=> onViewChange('detail', product)}>Ver Detalle</button>
        </div>
    );
}

export default ProductItem;