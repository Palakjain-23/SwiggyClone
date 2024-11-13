import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import Banner from "./Banner.js";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import useBanner from "../utils/useBanner";
import useRestaurantCard from "../utils/useRestaurantCard";
import "../index.css";
import TopRestau from "./TopRestau.js";

const Body = () => {
  const restaurants = useRestaurantCard();
  const [filterdRestaurants, setFilterdRestaurants] = useState([]);

 // console.log("Restaurant",restaurants);
  const bannerData = useBanner();

  const [showFilteredResults, setShowFilteredResults] = useState(false);

  const handleFilterClick = (filterText) => {
    if (filterText === "4") {
      const filteredList = restaurants.filter(
        (restaurant) => restaurant.info.avgRating > 4
      );
      setFilterdRestaurants(filteredList);
    } else if (filterText === "200") {
      const filteredList = restaurants.filter((restaurant) => {
        let costMatch = restaurant.info.costForTwo.match(/\d+/);
        let costForTwo = parseInt(costMatch[0], 10);
        return costForTwo >= 200 && costForTwo <= 400;
      });
      setFilterdRestaurants(filteredList);
    } else if (filterText === "pureveg") {
      const filteredList = restaurants.filter(
        (restaurant) =>
          restaurant.info.veg === true
      );
      setFilterdRestaurants(filteredList);
    }
   
    setShowFilteredResults(true);
  };

  const handleToggleClick = () => {
    setShowFilteredResults(!showFilteredResults);
  };
// console.log(restaurants);
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body w-4/5 flex justify-center flex-col mx-auto">
      <div className="m-8">
        <h2 className="m-3 font-extrabold text-2xl">What's on your mind?</h2>
        <Banner data={bannerData} />
      </div>
      <div className="m-8">
        <h2 className="m-3 font-extrabold text-2xl">Top restaurant chains in Dehradun</h2>
        <TopRestau />
      </div>
      <div className="m-8 mb-20">
        <div>
          <h2 className="m-3 font-extrabold text-2xl">
            Restaurants with online food delivery in Dehradun
          </h2>
        </div>

        <div className="m-4 ">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" className=":hover-bg-cyan-300 :hover-text-white" onClick={() => handleToggleClick()}>
              {showFilteredResults ? "All" : "Filtered"}
            </Button>
            <Button variant="outlined" onClick={() => handleFilterClick("4")}>
              4+ Rating
            </Button>
            <Button variant="outlined" onClick={() => handleFilterClick("200")}>
              Price 200-400
            </Button>
            <Button variant="outlined" onClick={() => handleFilterClick("pureveg")}>
              Pure Veg
            </Button>
          </Stack>
        </div>

        <div className="flex flex-wrap justify-between pl-2 pr-4 ">
          {showFilteredResults ? (
            filterdRestaurants && filterdRestaurants.map((res) => {
              return (
                <Link key={res.info.id} to={"/FlavourFleet/restaurants/" + res.info.id}>
                  <RestaurantCard resData={res} />
                </Link>
              )
            }
            )
          ) : (
            restaurants && restaurants.map((res) => {
              return (
                <Link key={res.id} to={"/FlavourFleet/restaurants/" + res.info.id}>
                  <RestaurantCard resData={res} />
                </Link>
              )}))
          }
        </div>
      </div>
      </div>
      )
        }
      export default Body;
