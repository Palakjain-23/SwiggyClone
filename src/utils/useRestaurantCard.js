import { useState, useEffect } from 'react';
export default function useRestaurantCard() {
  const [restaurants, setRestaurants] = useState([]);
 useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2885767&lng=78.032381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      setRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);     
    };
    fetchData();
  }, []);
 
  return restaurants;
}
