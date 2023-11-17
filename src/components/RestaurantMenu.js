import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TimelapseSharpIcon from '@mui/icons-material/TimelapseSharp';
import "../index.css";
const RestaurantMenu = () => {
  const { resId } = useParams();
  //console.log("log in restaurantmanu",restaurants);
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage,avgRating} = resInfo?.cards[0]?.card?.card?.info;
  const {deliveryTime}=resInfo?.cards[0]?.card?.card?.info?.sla;
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
    (c => c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);
  return (
    <div className="m-0 p-4 bg-gray-100">
      <div className="flex m-auto w-6/12 mt-10 justify-between">
        <div className="flex flex-col justify-between ">
          <h1 className="font-bold text-2xl p-2">{name}</h1>
          <h2 className="text-sm p-2">{cuisines.join(", ")}</h2>
        </div>
        <div className="flex flex-col bg-white shadow-xl p-2">
          <div className="flex"> 
             <div className="p-1 flex justify-center align-middle"><img src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=626&ext=jpg" className="h-9 w-10"></img></div> 
            <div className="p-1"><h4 className="text-xl">{avgRating}</h4></div>
          </div>
          <div>
            <h2 className="text-sm">100+ ratings</h2>
          </div>
        </div>
      </div>
      <div className="w-6/12 m-auto border border-dotted-black mt-6 mb-6"></div>
      <div className="flex w-6/12 m-auto mb-10">
        <div className="flex justify-around mr-3">
        <TimelapseSharpIcon/>
        <h3>{deliveryTime}</h3>
        </div>
        <div className="flex">
        <CurrencyRupeeIcon/>
        <h3>{costForTwoMessage}</h3>
        </div>
      </div>
    
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
}
export default RestaurantMenu;
