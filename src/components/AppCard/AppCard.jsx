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
                        <img src={thumbnail} className='w-[90px] h-[82px] @min-[585px]:w-full @min-[585px]:h-[90px] @min-[768px]:min-w-[114px] @min-[768px]:h-[97px] @min-[1024px]:min-w-[165px] @min-[1024px]:h-[130px] @min-[1280px]:min-w-[218px] @min-[1280px]:h-[170px] @min-[1536px]:min-w-[269px]  2xl:min-h-56 rounded-2xl' />
                    </div>
                    <div className="text-base-content space-y-1.5 mt-2">
                        <h4 className='font-medium text-sm @min-[585px]:text-[16px] @min-[760px]:text-lg'>{name}</h4>
                        <div className="flex text-xs @min-[585px]:text-[16px] justify-between">
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