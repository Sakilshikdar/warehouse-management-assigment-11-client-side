import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {name, img, description, price, quantity, supplierName, sold} = product
    return (
        <div className='service-container shadow-lg p-3 mb-5 bg-white rounded'>
        <img style={{width:'400px'}} src={img} alt="" />
        <h2>{name}</h2>
        <p>Price: {price}$</p>
        <h6>Description: {description.slice(0, 100)}...</h6>
        <p>quantity: {quantity}</p>
        <h6>supplier Name: {supplierName}</h6>
        <p>Sold: {sold}</p>
        <Link to={'/inventory'}><button className='button border-3'>Update</button></Link>
    </div>
    );
};

export default Product;