import { useState, useEffect } from 'react';
export default function useBanner() {
    const [bannerData, setBannerData] = useState([]); 
    useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2885767&lng=78.032381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      setBannerData(json.data.cards[0]?.card?.card?.imageGridCards?.info);
      // console.log(json.data);
      // console.log(bannerData);
    };
    fetchData();
  }, []);
  return bannerData
}
