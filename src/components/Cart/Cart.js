import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({product}) => {
    const {name, img, description, price, quantity, supplierName, sold} = product;
    
    const handleQuantity =(id) =>{
        // const quantity = product.quantity
        console.log(id);
    }
    return (
        <div className='service-container shadow-lg p-3 mb-5 bg-white rounded'>
        <img style={{width:'400px'}} src={img} alt="" />
        <h2>{name}</h2>
        <p>Price: {price}$</p>
        <h6>Description: {description}...</h6>
        <p>quantity: {quantity}</p>
        <h6>supplier Name: {supplierName}</h6>
        <p>Sold: {sold}</p>
        <button onClick={()=>handleQuantity(quantity)} className='button border-3'>delivered</button>
    </div>
    );
};

export default Cart;