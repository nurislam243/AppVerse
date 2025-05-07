import AppSlider from '../../components/AppSlider/AppSlider';
import TrendingApps from '../../components/TrendingApps/TrendingApps';
import TopDownloads from '../../components/TopDownloads/TopDownloads';
import CategorySection from '../../components/CategorySection/CategorySection';
import { useLoaderData } from 'react-router';
import { educationAppsData, gamingAppsData, productivityAppsData } from '../../utils/utils';


const AppsPage = () => {
    const apps = useLoaderData();
    const productivityApps = productivityAppsData(apps);
    const gamingApps = gamingAppsData(apps);
    const educationApps = educationAppsData(apps);

    return (
        <div className='container mx-auto'>
            <AppSlider></AppSlider>
            {/* Trending section section */}
            <div className="">
                <div className="mt-[100px] mb-[50px]">
                    <h2 className="text-primary text-3xl lg:text-4xl font-bold text-center">🔥 Trending Apps</h2>
                    <p className="text-base-content/70 text-lg mt-2 text-center">Discover the hottest apps everyone is talking about. Stay updated with the top-rated apps this week.
                    </p>
                </div>
                <TrendingApps apps={apps}></TrendingApps>
            </div>
            {/* categories section */}
            <div className="">
                <div className="text-center mt-[100px] mb-[20px]">
                    <h1 className='text-primary/90 font-bold text-3xl lg:text-4xl'>Category</h1>
                    <p className='text-base-content/70 text-lg mt-2'>Discover apps from different categories</p>
                </div>
                <CategorySection apps={productivityApps} category={'Productivity'}></CategorySection>
                <CategorySection apps={gamingApps} category={'Gaming'}></CategorySection>
                <CategorySection apps={educationApps} category={'Education'}></CategorySection>
            </div>
            {/* TopDownloads section */}
            <div className="">
                <div className="text-center mt-[100px] mb-[20px]">
                    <h1 className='text-primary/90 font-bold text-3xl lg:text-4xl'>Top Downloads</h1>
                    <p className='text-base-content/70 text-lg mt-2'>Discover apps from different categories</p>
                </div>
                <TopDownloads apps={apps}></TopDownloads>
            </div>
        </div>
    );
};

export default AppsPage;