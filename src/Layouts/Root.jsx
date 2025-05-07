import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer.jsx/Footer';

const Root = () => {
    return (
        <div className='@container'>
            <Navbar></Navbar>
            {/* main section */}
            <main className="min-h-[calc(100vh-96px)] bg-base-100/5 px-3 md:px-2 pb-10 pt-5">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;