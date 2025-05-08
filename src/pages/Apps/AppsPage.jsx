import AppSlider from '../../components/AppSlider/AppSlider';
import TrendingApps from '../../components/TrendingApps/TrendingApps';
import TopDownloads from '../../components/TopDownloads/TopDownloads';
import CategorySection from '../../components/CategorySection/CategorySection';
import { useLoaderData } from 'react-router';
import { educationAppsData, gamingAppsData, latestSliderApps, productivityAppsData } from '../../utils/utils';
import { Helmet } from 'react-helmet-async';


const AppsPage = () => {
    const apps = useLoaderData();
    const productivityApps = productivityAppsData(apps);
    const gamingApps = gamingAppsData(apps);
    const educationApps = educationAppsData(apps);
    const latestSlider = latestSliderApps(apps);

    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Apps Page | AppVerse</title>
            </Helmet>

            <AppSlider latestSlider={latestSlider}></AppSlider>
            {/* Trending section section */}
            <div className="">
                <div className="mt-[100px] mb-[50px] px-4 lg:p-0 max-w-[800px] mx-auto">
                    <h2 className="text-primary text-3xl lg:text-4xl font-bold text-center">🔥 Trending Apps</h2>
                    <p className="text-base-content/70 text-lg mt-2 text-center">Discover the hottest apps everyone is talking about. Stay updated with the top-rated apps this week.
                    </p>
                </div>
                <TrendingApps apps={apps}></TrendingApps>
            </div>
            {/* categories section */}
            <div className="">
                <div className="text-center mt-[100px] mb-[20px] px-4 lg:p-0 max-w-[800px] mx-auto">
                    <h1 className='text-primary/90 font-bold text-3xl lg:text-4xl'>Category</h1>
                    <p className='text-base-content/70 text-lg mt-2'>Discover apps from different categories</p>
                </div>
                <CategorySection apps={productivityApps} category={'Productivity'}></CategorySection>
                <CategorySection apps={gamingApps} category={'Gaming'}></CategorySection>
                <CategorySection apps={educationApps} category={'Education'}></CategorySection>
            </div>
            {/* TopDownloads section */}
            <div className="">
                <div className="text-center max-w-[800px] mx-auto mt-[100px] mb-[40px] px-4 lg:p-0">
                    <h1 className='text-primary/90 font-bold text-3xl lg:text-4xl'>Most Downloaded Apps
                    </h1>
                    <p className='text-base-content/70 text-lg mt-2'>Discover the most downloaded and trusted apps by users around the globe. Join millions who have already made their choice!
                    </p>
                </div>
                <TopDownloads apps={apps}></TopDownloads>
            </div>
        </div>
    );
};

export default AppsPage;