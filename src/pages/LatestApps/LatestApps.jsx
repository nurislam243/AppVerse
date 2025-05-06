import React from 'react';
import { useLoaderData } from 'react-router';
import { latestAppsData } from '../../utils/utils';

const LatestApps = () => {
    const apps = useLoaderData();
    const latestApps = latestAppsData(apps);
    latestApps.forEach(element => {
        console.log(element);
    });
    return (
        <div>
            {
                latestApps.map(singleApps => {
                   return <h1>{singleApps.name}</h1>
                })
            }
        </div>
    );
};

export default LatestApps;