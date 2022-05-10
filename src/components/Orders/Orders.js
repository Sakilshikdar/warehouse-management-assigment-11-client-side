import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import axios from 'axios';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Orders = () => {
    const {id} = useParams();
    // const [service] = useProducts(id);
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            quantity: products.quantity,
            serviceId: id,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
            }
        })
    }
    return (
        <div className='w-50 mx-auto'>
        <h2>Please Order: {products.name}</h2>
        <form onSubmit={handlePlaceOrder}>
            <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
            <br />
            <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
            <br />
            <input className='w-100 mb-2' type="text"  value={products.quantity} name="Quantity" placeholder='Quantity' required  />
            <br />
            <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
            <br />
            <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
            <br />
            <input className='btn btn-primary' type="submit" value="Place Order" />
        </form>
    </div>
    );
};

export default Orders;