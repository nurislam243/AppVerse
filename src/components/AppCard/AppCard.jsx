import millify from 'millify';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import { Link } from 'react-router';

const AppCard = ({singleApp }) => {
    const {thumbnail, name, rating, downloads, id} = singleApp;
    return (
        <>
            <Link to={`/appDetails/${id}`}>
                <div className='bg-base-200 p-2 hover:bg-base-300 rounded-2xl scroll-snap-align-start cursor-pointer border-base-300'>
                    <div className="">
                        <img src={thumbnail} className='h-56 min-w-60 rounded-2xl' />
                    </div>
                    <div className="text-base-content space-y-1.5 mt-2">
                        <h4 className='font-medium text-lg'>{name}</h4>
                        <div className="flex justify-between">
                            <h4 className='flex items-center gap-1'><FaStar/>{rating}</h4>
                            <h4 className='flex items-center gap-1'><HiOutlineDownload /> {millify(downloads, { precision: 2 })}+</h4>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default AppCard;