import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 3</a></li>
                </ul>
                </div>
                <div className="flex justify-center items-center gap-1.5">
                    <img className='w-12' src="/public/AppVerseLogo.png" alt="logo" />
                    <Link className=" text-xl">AppVerse</Link>
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'} >Apps</NavLink></li>
                    <li><NavLink to={'/myProfile'} >My Profile</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link to={'/signup'} className="">SignUp</Link>
                <Link to={'/login'} className="">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;