import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='mb-5'>
            <div id='services'>
                <h1 className='services-title d-flex justify-content-center  mt-5'>All Products</h1>
                <div className='services-container'>
                    {
                        products.map(product => <Cart key={product._id}
                            product={product}
                        ></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;