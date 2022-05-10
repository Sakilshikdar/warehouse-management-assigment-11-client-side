import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Items = () => {
    const [products, setProducts] = useState([]);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        fetch('https://gentle-harbor-89262.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://gentle-harbor-89262.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(service => service._id !== id);
                    setProducts(remaining);
                    setUpdated(updated)
                })
        }
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-screen mx-5">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-5 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-5 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-5 py-3">
                            Image
                        </th>

                        <th scope="col" className="px-5 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products?.length ? (
                        products.map((product) =>{
                            return (
                                
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-5 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                    >
                                        {product.name}
                                    </th>
                                    <td className="px-5 py-4">{product.price}</td>
                                    <td className="px-5 py-4">
                                        <img style={{ width: '50px' }} src={product.img} alt="" />
                                    </td>

                                    <td className="px-5 py-4 text-right">
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            onClick={() => handleDelete(product._id)}
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <p>No data found</p>
                    )}
                </tbody>
            </table>
            <div className='d-flex justify-content-center my-3'>
            <Link to={'/itemsAdd'}><button className=' border-none'>Add new item</button></Link>
            </div>
        </div>
    );
};

export default Items;