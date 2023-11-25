import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-280px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;