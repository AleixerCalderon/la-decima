import React from "react";
import ProductItem from './ProductItem';
import Banner from './Banner';
import './ProductList.css'

const products = [
    {id:1, nameItem:'Sneakers', price:100000, image: './sc.png'},
    {id:2, nameItem:'Sneakers', price:100000, image: './sc.png'},
    {id:3, nameItem:'Sneakers', price:100000, image: './sc.png'},
    {id:4, nameItem:'Sneakers', price:100000, image: './sc.png'},
    {id:5, nameItem:'Sneakers', price:100000, image: './sc.png'}
]

function ProductList({onViewChange}) {
    return (
<div className="product-list">
<Banner/>
{products.map(product => (
<ProductItem key={product.id} 
product={product} 
onViewChange={onViewChange}
/>
))}
</div>
    );
}

export default ProductList;