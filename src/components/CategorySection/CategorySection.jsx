import React, { useRef } from 'react';
import AppCard from '../AppCard/AppCard';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const CategorySection = ({apps, category}) => {
const sliderRef = useRef(null);

    const slideLeft = () =>{       
        sliderRef.current.scrollLeft -= 500;
    }
    const slideRight = () =>{       
        sliderRef.current.scrollLeft += 500;
    }

    return (
        <div className="">
            <h2>{category}</h2>
            <div className="flex items-center group/category">
                <MdArrowBackIosNew className='opacity-0 cursor-pointer group-hover/category:opacity-100' onClick={slideLeft} size={40}/>
                <div ref={sliderRef} className="flex gap-6 overflow-x-auto scrollbar-width whitespace-nowrap scroll-smooth scroll-snap-align-start">
                    {
                        apps.map(singleApp => <AppCard singleApp={singleApp}></AppCard>)
                    }
                </div>
                <MdArrowForwardIos className='opacity-0 cursor-pointer group-hover/category:opacity-100' onClick={slideRight} size={40}/>
            </div>
        </div>
    );
};

export default CategorySection;