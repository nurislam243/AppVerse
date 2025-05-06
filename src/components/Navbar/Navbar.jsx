import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import NavEnd from '../ui/Navend';
import Button from '../ui/button';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className="w-full  sticky top-0 bg-base-200 z-20">
            <nav className="container mx-auto navbar py-5">
                <div className="navbar-start">
                    <div className="dropdown mr-2">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <IoMenu size={35}/>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-3 text-secondary space-y-4 text-xl font-medium border-base-300 border-2">
                        <li><NavLink to={'/'} >Apps</NavLink></li>
                        <li><NavLink to={'/latest'} >Latest Apps</NavLink></li>
                        <li><NavLink to={'/myProfile'} >My Profile</NavLink></li>
                        
                    </ul>
                    </div>
                    <div className="flex justify-center items-center gap-1.5">
                        <img className='w-12' src="/public/AppVerseLogo.png" alt="logo" />
                        <h2 className="gradient-text text-3xl font-bold hidden min-[450px]:block">AppVerse</h2>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-secondary font-medium text-xl">
                        <li><NavLink to={'/'} className={({isActive})=>(isActive ? 'btn btn-primary text-xl font-medium rounded-none' : '')}>Apps</NavLink></li>
                        <li><NavLink to={'/latest'} className={({isActive})=>(isActive ? 'btn btn-primary text-xl font-medium rounded-none' : '')}>Latest Apps</NavLink></li>
                        <li><NavLink to={'/myProfile'} className={({isActive})=>(isActive ? 'btn btn-primary text-xl font-medium rounded-none' : '')}>My Profile</NavLink></li>
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