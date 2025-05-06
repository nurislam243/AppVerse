import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import NavEnd from '../ui/Navend';
import Button from '../ui/button';

const Navbar = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className="w-full  sticky top-0 bg-base-200 z-20">
            <nav className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-secondary text-xl font-medium shadow">
                        <li><NavLink to={'/'} >Apps</NavLink></li>
                        <li><NavLink to={'/latest'} >Latest Apps</NavLink></li>
                        <li><NavLink to={'/myProfile'} >My Profile</NavLink></li>
                        
                    </ul>
                    </div>
                    <div className="flex justify-center items-center gap-1.5">
                        <img className='w-12' src="/public/AppVerseLogo.png" alt="logo" />
                        <h2 className="gradient-text text-3xl font-bold">AppVerse</h2>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-secondary font-medium text-xl">
                        <li><NavLink to={'/'} >Apps</NavLink></li>
                        <li><NavLink to={'/latest'} >Latest Apps</NavLink></li>
                        <li><NavLink to={'/myProfile'} >My Profile</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                                                
                    <div className="">
                        {
                            !user ? <Link to={'/login'} className="text-lg cursor-pointer flex items-center"> <Button btnName={'Login'}></Button></Link> : <NavEnd></NavEnd>                      
                        }
                    </div>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;