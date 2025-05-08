import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const LatestAppsCard = ({singleApp}) => {
    const {thumbnail, category, name, rating, id } = singleApp;
    return (
        <div className="flex items-center gap-4 lg:gap-8 p-4 lg:px-8 lg:py-6 bg-purple-50 rounded-2xl shadow-md">

            {/* App Image */}
            <div className="relative">
                <h4 className='absolute badge badge-accent top-0 left-0'>New</h4>
                <img
                    src={thumbnail}
                    alt="Clash of Clans"
                    className="w-32 h-32 rounded-xl lg:w-36 lg:h-36 object-cover"
                />
            </div>

            {/* App Details */}
            <div className="flex flex-col gap-1 lg:gap-2">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-sm text-gray-500">{category}</p>

                <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar></FaStar>
                <span className="text-sm font-medium">{rating}</span>
                </div>

                <Link to={`/appDetails/${id}`} className='btn btn-secondary mt-2'>view app</Link>
            </div>
        </div>
    );
};

export default LatestAppsCard;