import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Navbar></Navbar>
                <div className='px-2'><Outlet></Outlet></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;