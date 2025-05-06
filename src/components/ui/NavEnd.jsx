import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { FaUserAlt } from 'react-icons/fa';
import Button from './button';

const NavEnd = () => {
    const {user, handleLogout} = useContext(AuthContext);
    return (
        <div className="flex items-center gap-2">
            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        {
                            user ? <img src={user?.photoURL} /> : <FaUserAlt />
                        }
                        {
                            user ?  user?.displayName : ''
                        }
                    </div>
                </div>
            </div>  
            <button onClick={handleLogout}><Button btnName={'Logout'}></Button></button>
        </div> 
    );
};

export default NavEnd;