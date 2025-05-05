import React from 'react';
import { Link } from 'react-router';

const AppCard = ({singleApp }) => {
    const {thumbnail, name, rating, downloads, id} = singleApp;
    return (
        <>
            <Link to={`/appDetails/${id}`}>
            <div className='bg-purple-400 p-2 transition-transform duration-500 ease-in-out hover:scale-103 rounded-2xl scroll-snap-align-start cursor-pointer hover:shadow-xl'>
            <div className="">
                <img src={thumbnail} className='h-60 min-w-60 rounded-2xl' />
            </div>
            <div className="flex gap-1.5">
                <h4>{name}</h4>
                <h4>{rating}</h4>
                <h4>{downloads}</h4>
            </div>
            </div>
            </Link>
        </>
    );
};

export default AppCard;