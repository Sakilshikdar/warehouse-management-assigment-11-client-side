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
                <img className='img w-75' src="https://thumbs.dreamstime.com/b/september-pathum-thani-thailand-industrial-warehouse-i-september-pathum-thani-thailand-industrial-warehouse-interior-shelves-126441631.jpg" />
            </div>
        </div>
    );
};

export default Banner;