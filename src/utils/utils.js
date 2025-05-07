export const trendingAppsData = (apps) => {
    const trendingSort = apps 
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5); 
    return trendingSort;
  };

export const topDownloadsData = (apps) =>{
    const topDownloadsSort = apps
      .sort((a, b) => b.downloads - a.downloads)
      .slice(0, 8); 
    return topDownloadsSort;
    
}

export const productivityAppsData = (apps) =>{
    const productivityApps = apps.filter(app => app.category === 'Productivity');
    return productivityApps;
}

export const gamingAppsData = (apps) =>{
    const gamingApps = apps.filter(app => app.category === 'Gaming');
    return gamingApps;
} 

export const educationAppsData = (apps) =>{
    const educationApps = apps.filter(app => app.category === 'Education');
    return educationApps;
} 
  
export const latestAppsData = (apps) =>{
    const latestApps = apps.sort((a, b) => b.id - a.id).slice(0, 10);
    return latestApps;
}