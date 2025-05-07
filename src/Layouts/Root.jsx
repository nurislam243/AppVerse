import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer.jsx/Footer';

const Root = () => {
    return (
        <div className='@container'>
            <Navbar></Navbar>
            {/* main section */}
            <main className="min-h-[80vh] bg-base-100 px-3 md:px-2">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;