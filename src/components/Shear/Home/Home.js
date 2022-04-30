import React from 'react';
import './Home.css'
import Banner from '../../Banner/Banner';
import Products from '../../products/Products';
import OurPackage from '../../ExtraPart/OurPackage/OurPackage';
import Footer from '../Footer/Footer';
import Storage from '../../ExtraPart/Storage/Storage';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurPackage></OurPackage>
            <Storage></Storage>
            <Footer></Footer>
        </div>
    );
};

export default Home;