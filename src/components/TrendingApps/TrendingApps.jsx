import React, { useRef } from 'react';
import AppCard from '../AppCard/AppCard';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { trendingAppsData } from '../../utils/utils';
import TrendingAppCard from '../TrendingAppCard/TrendingAppCard';

const AppsContainer = ({apps}) => {

    const trendingApps = trendingAppsData(apps);
    
    const sliderRef = useRef(null);

    return (
        <div className="flex items-center">
            <div ref={sliderRef} className="grid @min-[300px]:grid-cols-2 @min-[700px]:grid-cols-3 @min-[1200px]:grid-cols-4 @min-[1500px]:grid-cols-5 gap-4">
                {
                    trendingApps.map(singleApp => <TrendingAppCard singleApp={singleApp}></TrendingAppCard>)
                }
            </div>
        </div>
    );
};

export default AppsContainer;