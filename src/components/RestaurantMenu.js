import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantCard from "../utils/useRestaurantCard";
import "../index.css";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurants = useRestaurantCard();

  //console.log("log in restaurantmanu",restaurants);
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
    (c => c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);
  return (
    <div className="text-center m-4 p-2">
      <div className="flex m-auto w-6/12 justify-between">
        <div>
          <h1 className="font-bold m-2 p-2 text-xl">{name}</h1>
          <h2 className=" m-2 p-2 text-lg">{cuisines.join(", ")}-{costForTwoMessage}</h2>
        </div>
        <div className="flex flex-col border border-black mt-10">
          <div>
            <div className="p-1"><img src="rating-xxl.png" /></div>
            {/* <div className="p-1"><h4>{restaurants.info.avgRatingString}</h4></div> */}
          </div>
          <div>
            <h2>100+ ratings</h2>
          </div>
        </div>
      </div>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItem={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
}
export default RestaurantMenu;
