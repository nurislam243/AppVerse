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
    <div className="max-w-2xl mx-auto mt-10 py-6 px-3 sm:px-4 md:px-6 lg:px-14 rounded-2xl shadow-xl bg-base-100 shadow-neutral">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary/90">My Profile Information</h2>

      {/* Profile Image */}
      <div className="flex flex-col items-center mb-6">
        {
          user ? <img 
          src={user?.photoURL} 
          alt="Profile" 
          className="w-28 h-28 rounded-xl border-1" 
        />: <FaUserAlt className="w-28 h-28 rounded-xl border-1" />
        }
        <h2 className='mt-2 text-base-content/90 sm:text-xl'><span className='text-secondary/90'>Name: </span>{user?.displayName}</h2>
        <p className="mt-3 text-base-content/90 sm:text-xl font-medium"><span className='text-secondary/90'>Email:</span> {user?.email}</p>
      </div>

      <hr className='border-t border-dashed my-7'/>

      <h1 className='text-center text-primary/85 font-bold sm:text-xl'>Update Name and Profile Image</h1>
      {/* Update Form */}
      <form onSubmit={submitUpdateProfile} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input 
            type="text"
            name='name' 
            placeholder="Enter your name"
            className="w-full border p-3 rounded-lg input input-bordered focus:outline-none focus:ring-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Photo URL</label>
          <input 
            type="text" 
            name='image'
            placeholder="Enter photo URL"
            className="w-full border input input-bordered p-3 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        <button 
          type="submit"
          className="w-full btn  btn-secondary py-3 rounded-lg"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};


export default MyProfile;