import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { FaUserAlt } from 'react-icons/fa';

const MyProfile = () => {
  const {user, handleUpdateProfile} = useContext(AuthContext);
  

  const submitUpdateProfile = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    handleUpdateProfile(name, image)
  }
  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-2xl shadow-lg bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">My Profile Information</h2>

      {/* Profile Image */}
      <div className="flex flex-col items-center mb-6">
        {
          user ? <img 
          src={user?.photoURL} 
          alt="Profile" 
          className="w-24 h-24 rounded-xl border-1 border-indigo-500 shadow-md" 
        />: <FaUserAlt />
        }
        <h2 className='mt-2'>Name: {user?.displayName}</h2>
        <p className="mt-3 text-gray-700 font-medium">Email: {user?.email}</p>
      </div>

      <hr className='border-t border-dashed my-7'/>

      <h1 className='text-center'>Update Name and Profile Image</h1>
      {/* Update Form */}
      <form onSubmit={submitUpdateProfile} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input 
            type="text"
            name='name' 
            placeholder="Enter your name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Photo URL</label>
          <input 
            type="text" 
            name='image'
            placeholder="Enter photo URL"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};


export default MyProfile;