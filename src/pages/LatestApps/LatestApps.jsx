import React from 'react';
import { useLoaderData } from 'react-router';
import { latestAppsData } from '../../utils/utils';
import LatestAppsCard from '../../components/LatestAppsCard/LatestAppsCard';

const LatestApps = () => {
    const apps = useLoaderData();
    const latestApps = latestAppsData(apps);
    return (
        <div className="">
            <div className="container mx-auto max-w-4xl text-center space-y-5 px-3 mt-3 lg:mt-6 mb-10">
                <h2 className='text-primary/80 font-bold text-2xl md:text-3xl'>Discover Newly Launched Apps</h2>
                <p className='text-base-content/70 text-sm lg:text-[16px]'> Explore the latest apps freshly added to our AppStore! Stay ahead by discovering newly launched apps in categories like Productivity, Gaming, and Education. Find your next favorite app today.</p>
            </div>
            <div className='grid grid-cols-1 @min-[520px]:grid-cols-2 @min-[1280px]:grid-cols-3 gap-6 container mx-auto'>
                {
                    latestApps.map(singleApp => <LatestAppsCard singleApp={singleApp}></LatestAppsCard>)
                }
            </div>
        </div>
    );
};

export default LatestApps;