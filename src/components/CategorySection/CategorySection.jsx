import React, { useRef } from 'react';
import AppCard from '../AppCard/AppCard';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const CategorySection = ({ apps, category }) => {
    const sliderRef = useRef(null);

    const slideLeft = () => {
        sliderRef.current.scrollLeft -= 500;
    }
    const slideRight = () => {
        sliderRef.current.scrollLeft += 500;
    }

    return (
        <div>
            <h2 className='text-primary/90 text-2xl lg:text-3xl font-bold mt-6 mb-4'>{category}</h2>

            <div className="flex relative items-center group/category">
                
                {/* Left Arrow */}
                <MdArrowBackIosNew 
                    className='absolute left-0 z-10 opacity-0 cursor-pointer group-hover/category:opacity-60 hover:opacity-100 bg-base-200 rounded-full p-2 shadow-md' 
                    onClick={slideLeft} 
                    size={41} 
                />

                <div 
                    ref={sliderRef} 
                    className="flex gap-6 overflow-x-auto scrollbar-width whitespace-nowrap scroll-smooth scroll-snap-align-start"
                >
                    {
                        apps.map(singleApp => <AppCard key={singleApp.id} singleApp={singleApp} />)
                    }
                </div>

                {/* Right Arrow */}
                <MdArrowForwardIos 
                    className='absolute right-0 z-10 opacity-0 cursor-pointer group-hover/category:opacity-60 hover:opacity-100 bg-base-200 rounded-full p-2 shadow-md' 
                    onClick={slideRight} 
                    size={41} 
                />
            </div>
        </div>
    );
};

export default CategorySection;
