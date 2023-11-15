import { useEffect, useState } from "react";
import MenuItems from "./MenuItems.js";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useBanner2 from "../utils/useBanner2.js";
import useRestaurantCard from "../utils/useRestaurantCard";
const Search = () => {

    const menuItemData = useBanner2();
    const restaurants = useRestaurantCard();//seetlistofres is used to update listofrestaurants

    const [filterdRestaurants, setFilterdRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    
    return (
        <div>
            <div className="search m-4 p-8 flex justify-center">
                <input type="text" className="border border-solid border-black  w-1/3 mx-4 p-3 rounded-lg  " placeholder="search restaurants and food"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button className=" px-2 py-2 bg-green-500 rounded-lg align-middle hover:shadow-lg" onClick={() => {
                    const filteredList = restaurants.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilterdRestaurants(filteredList);
                    setIsSearchClicked(true);
                }}>Search</button>
            </div>
            
            {isSearchClicked===true?        
            (<div className="flex flex-wrap justify-center">
                {filterdRestaurants.map((res) => (
                    <Link
                        key={res.info.id}
                        to={"/restaurants/" + res.info.id} >
                        <RestaurantCard resData={res} />
                    </Link>
                ))}
            </div>):<MenuItems data={menuItemData} /> 
            }
        </div>
    )
};
export default Search;
