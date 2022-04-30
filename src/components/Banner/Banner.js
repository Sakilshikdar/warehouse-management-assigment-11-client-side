import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='home mt-4 align-items-center'>
            <div className='text-white details'>
            <h2>This is a Electronics Warehouse</h2>
            <p>This is a side here we stored some electronics products.Here have Tv,camera,laptop and other Electronics Products</p>
            </div>
            <div>
                <img className='img w-50' src="https://www.startech.com.bd/image/cache/catalog/gimbal/zhiyun/smooth-5/smooth-5-01-500x500.jpg" />
            </div>
        </div>
    );
};

export default Banner;