import React from "react";
import './ProductDetail.css';
function ProductDetail({product, onViewChange, onAddToCart}) {
    if(!product){
    return <div>No existe product</div>;
    }
    return(
        <div className="product-detail">
<img src={product.image} alt="" />
<h2>{product.name}</h2>
<p>Descripción </p>
<button onClick={() => onViewChange('list')}>Regresar</button>
<button onClick={()=>onAddToCart(product)}>Añadir al carrito </button>
        </div>
    );
    
}
export default ProductDetail;