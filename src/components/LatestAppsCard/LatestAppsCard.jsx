import React from 'react';
import { FaStar } from 'react-icons/fa';

const LatestAppsCard = ({singleApp}) => {
    const {thumbnail, category, name, rating } = singleApp;
    return (
        <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl shadow-md">

            {/* App Image */}
            <div className="relative">
                <h4 className='absolute badge badge-accent top-0 left-0'>New</h4>
                <img
                    src={thumbnail}
                    alt="Clash of Clans"
                    className="w-32 h-32 rounded-xl object-cover"
                />
            </div>

            {/* App Details */}
            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-sm text-gray-500">{category}</p>

                <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar></FaStar>
                <span className="text-sm font-medium">{rating}</span>
                </div>

                <button className='btn btn-secondary'>view app</button>
            </div>
        </div>
    );
};

export default LatestAppsCard;