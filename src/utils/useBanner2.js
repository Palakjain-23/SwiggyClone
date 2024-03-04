import { useState, useEffect } from 'react';
export default function useBanner2() {
    const [bannerData, setBannerData] = useState([]); 
    useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      setBannerData(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle.info);
      console.log(bannerData);
      console.log(json.data);
    };
    fetchData();
  }, []);
  //  console.log(bannerData);
  
  return bannerData
}
