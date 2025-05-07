import React from 'react';
import { useLoaderData } from 'react-router';
import { latestAppsData } from '../../utils/utils';
import LatestAppsCard from '../../components/LatestAppsCard/LatestAppsCard';

const LatestApps = () => {
    const apps = useLoaderData();
    const latestApps = latestAppsData(apps);
    return (
        <div className='grid grid-cols-1 @min-[520px]:grid-cols-2 @min-[1280px]:grid-cols-3 gap-6 container mx-auto'>
            {
                latestApps.map(singleApp => <LatestAppsCard singleApp={singleApp}></LatestAppsCard>)
            }
        </div>
    );
};

export default LatestApps;