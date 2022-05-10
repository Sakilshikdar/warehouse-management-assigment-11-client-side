import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://gentle-harbor-89262.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='mb-5'>
            <div id='services'>
                <h1 className='services-title d-flex justify-content-center  mt-5'>My Service</h1>
                <div className='services-container container'>
                    {
                        products.slice(0, 6).map(product => <Product key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div className='d-flex justify-content-center '>
                <Link to={'/items'}><button className='text-center border-3'>Manage Inventories</button></Link>
                </div>
            </div>
        </div>
    )
};

export default Products;