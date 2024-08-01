import React from "react";
import ProductItem from './ProductItem';

import './ProductList.css'

const products = [
    {id:1, nameItem:'Adidas Samba', price:280000, image: './sc.png'},
    {id:2, nameItem:'NikeCourt Zoom Vapor', price:380000, image: './nikecourt-zoom-vapor-roger-federer-air-jordan-3-atmos.jpg'},
    {id:3, nameItem:'Nike Air Max-97', price:420000, image: './undefeated-nike-air-max-97-olive.jpg'},
    {id:4, nameItem:'Nike Air heaven', price:380000, image: './th.jpg'},
    {id:5, nameItem:'Nike Jordan 1', price:350000, image: './air-jordan-1-wheat.jpg'}
]

function ProductList() {
    return (
<div className="product-list">
{products.map(product => (
<ProductItem key={product.id} product={product} />
))}
</div>
    );
}

export default ProductList;