import RestaurantCard,{withPromotedLabel} from "./RestaurantCard.js"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import "../index.css";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);//seetlistofres is used to update listofrestaurants
    const [filterdRestaurants, setFilterdRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //optional chaining
        setFilterdRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    //console.log(listOfRestaurants);

     const{setUserName} = useContext(UserContext);
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <div>
                <h1>Looks like you are Offine !! please check your internet connection</h1>
            </div>
        );
    return listOfRestaurants.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
                <div className="search m-4 p-8">
                    <input type="text" className="border border-solid border-black mx-4" 
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className=" px-2 py-2 bg-blue-200 rounded-lg align-middle hover:shadow-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterdRestaurants(filteredList);
                    }}>Search</button>
                </div>
                <div className=" mx-4 my-11 border border-solid border-black bg-red-600 hover:shadow-lg">
                    <button className="align-middle"
                        onClick={() => {
                            const filterdList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                            setListOfRestaurants(filterdList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                   
                </div>
                <div className="m-11">
                <label>Username</label>
                <input type="search" className="border w-13 h-4 mx-2 border-black p-2"></input>
                </div>
                    

            </div>
            <div className="flex flex-wrap justify-center">
                {filterdRestaurants.map((res) => (
                    <Link
                        key={res.info.id}
                        to={"/restaurants/" + res.info.id} >
                        <RestaurantCard resData={res} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Body;

