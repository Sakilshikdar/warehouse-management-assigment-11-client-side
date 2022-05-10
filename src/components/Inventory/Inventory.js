import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantityNum, setQuantityNum] = useState('');
    

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    console.log(product);
    const handleQuantity = (id) => {
        // console.log(id);
        // //  const preNum = Number() ;
        // // if (quantityNum > 0) {
        // //     setQuantityNum(id => id - 1)
        // // }
        // fetch(`http://localhost:5000/inventory/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(quantityNum),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    };

    // let quantity = product.quantity
    // console.log(quantity);
    const handleAddQuantity = (event, id) => {
        event.preventDefault();
        console.log(id);
        const quantity = product.quantity;
        console.log(quantity);
        const number = event.target.number.value;
        const updatedProduct = {...quantity, number};

        // send data to the server
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('users added successfully!!!');
            event.target.reset();
        })  
    };

    return (
        <div className='service-container w-50 mx-auto shadow-lg p-3 mb-5 bg-white rounded'>
            <img style={{ width: '200px' }} src={product.img} alt="" />
            <h2>{product.name}</h2>
            <p>Price: {product.price}$</p>
            <h6>Description: {product.description}</h6>
            <p>quantity: {product.quantity}</p>
            <h6>supplier Name: {product.supplierName}</h6>
            <p>Sold: {product.sold}</p>
            <>
                <button onClick={() => handleQuantity(id)} className='button border-3'>delivered</button>
                <form onSubmit={()=>handleAddQuantity(id)}>
                <input type="text" number="number" placeholder='number'/>
                <br />
                <input type="submit" value="restore Item" />
                </form>
            </>
        </div>
    );
};

export default Inventory;