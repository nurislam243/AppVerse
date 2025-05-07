import millify from 'millify';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import { Link } from 'react-router';

const TopDownloadCard = ({singleApp}) => {
    const {id, name, developer, thumbnail, banner, downloads,  rating, description
    } = singleApp;
    return (
        <div className="rounded-xl w-full mx-auto @min-[903px]:min-w-[241px] @min-[1275px]:min-w-[305px] @min-[1530px]:min-w-[360px] @min-[1560px]:min-w-[366px] overflow-hidden bg-base-200 border border-base-300">
            <div className="relative">
                {/* Banner Image */}
                <img
                className="w-full h-32 object-cover"
                src={banner}
                alt="Banner"
                />
                {/* thumbnail Image */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <img
                    className="w-28 h-28 rounded-2xl border-5 border-neutral"
                    src={thumbnail} 
                    alt="Logo"
                />
                </div>
            </div>

            {/* Card Content */}
            <div className="pt-10 pb-6 px-4 text-center text-base-content">
                <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                <p className="text-base-content/70 text-sm mt-1">{developer}</p>

                <div className="flex items-center justify-center gap-6 mt-3">
                    <div className="flex items-center justify-center gap-1">
                        <FaStar className='text-yellow-500'/>
                        <span className="text-gray-700 font-medium">{rating}</span>
                    </div>
                    <h4 className='flex items-center gap-1'><HiOutlineDownload /> {millify(downloads, { precision: 2 })}+</h4>
                </div>

                <p className="mt-2 text-base-content/80">
                    {description}
                </p>

                <button>
                    <Link to={`/appDetails/${id}`} className="mt-4 px-4 py-2 btn btn-secondary hover:bg-gray-800 transition">
                    View App
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default TopDownloadCard;