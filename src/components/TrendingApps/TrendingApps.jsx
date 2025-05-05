import React, { useRef } from 'react';
import AppCard from '../AppCard/AppCard';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { trendingAppsData } from '../../utils/utils';

const AppsContainer = ({apps}) => {

    const trendingApps = trendingAppsData(apps);
    
    const sliderRef = useRef(null);

    const slideLeft = () =>{       
        sliderRef.current.scrollLeft -= 500;
    }
    const slideRight = () =>{       
        sliderRef.current.scrollLeft += 500;
    }
    return (
        <div className="flex items-center">
            <MdArrowBackIosNew className='opacity-40 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40}/>
            <div ref={sliderRef} className="flex gap-4 overflow-x-auto scrollbar-width whitespace-nowrap scroll-smooth scroll-snap-type-x mandatory">
                {
                    trendingApps.map(singleApp => <AppCard singleApp={singleApp}></AppCard>)
                }
            </div>
            <MdArrowForwardIos className='opacity-40 cursor-pointer hover:opacity-100' onClick={slideRight} size={40}/>
        </div>
    );
};

export default AppsContainer;