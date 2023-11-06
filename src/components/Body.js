import RestaurantCard from "./RestaurantCard.js"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import {Link } from "react-router-dom";
import "../index.css";
const Body= () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);//seetlistofres is used to update listofrestaurants
    const [filterdRestaurants,setFilterdRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);    
   
    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
        //optional chaining
        setFilterdRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
    };
    return listOfRestaurants.length==0 ? <Shimmer/> : (    
    <div className="body">
    <div className="filter">
    <div className="search">
        <input type="text" className="search-box" 
        value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
                }}
        />
        <button onClick={()=>{
        const filteredList=listOfRestaurants.filter(
            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
);
setFilterdRestaurants(filteredList);
}}>Search</button>
    </div>
        <button 
        className="filter-btn"
        onClick={() =>{
            const filterdList=listOfRestaurants.filter((res)=> res.info.avgRating>4);
            setListOfRestaurants(filterdList);
        }}
        >
        Top Rated Restaurants
        </button>
    </div> 
    <div className="res-container">
    {filterdRestaurants.map((res)=>(
            <Link 
            key = {res.info.id}
            to = {"/restaurants/" + res.info.id} >
            <RestaurantCard resData={res}/>
            </Link>
    ))}
    </div>
    </div>
    );
    };
export default Body;

