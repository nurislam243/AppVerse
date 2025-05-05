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
                <h1>Trending</h1>
                <TrendingApps apps={apps}></TrendingApps>
            </div>
            <CategorySection apps={productivityApps} category={'Productivity'}></CategorySection>
            <CategorySection apps={gamingApps} category={'Gaming'}></CategorySection>
            <CategorySection apps={educationApps} category={'Education'}></CategorySection>
            {/* TopDownloads section */}
            <div className="">
                <h1>Top Downloads</h1>
                <TopDownloads apps={apps}></TopDownloads>
            </div>
        </div>
    );
};

export default AppsPage;