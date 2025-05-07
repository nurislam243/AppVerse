import React, { useRef } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { topDownloadsData } from '../../utils/utils';
import TopDownloadCard from '../TopDownloadCard/TopDownloadCard';

const TopDownloads = ({apps}) => {
    const topDownloadsApps = topDownloadsData(apps);
    const sliderRef = useRef(null);

    const slideLeft = () =>{       
        sliderRef.current.scrollLeft -= 500;
    }
    const slideRight = () =>{       
        sliderRef.current.scrollLeft += 500;
    }

    return (
        <div className="flex relative items-center group/category">
            {/* left arrow */}
            <MdArrowBackIosNew 
                className='absolute hidden lg:block left-0 z-10 opacity-0 cursor-pointer group-hover/category:opacity-40 hover:opacity-100 bg-white rounded-full p-2 shadow-md' 
                onClick={slideLeft} 
                size={41} 
            />
            <div ref={sliderRef} className="grid grid-cols-1 @min-[450px]:grid-cols-2 lg:flex gap-4 2xl:gap-6 overflow-x-auto scrollbar-width scroll-smooth scroll-snap-align-start">
                {
                    topDownloadsApps.map(singleApp => <TopDownloadCard singleApp={singleApp}></TopDownloadCard>)
                }
            </div>
            {/* Right Arrow */}
            <MdArrowForwardIos 
                className='absolute hidden lg:block right-0 z-10 opacity-0 cursor-pointer group-hover/category:opacity-40 hover:opacity-100 bg-white rounded-full p-2 shadow-md' 
                onClick={slideRight} 
                size={41} 
            />
        </div>
    );
};

export default TopDownloads;