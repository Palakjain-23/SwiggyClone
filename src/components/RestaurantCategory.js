import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory=(data)=>{
    //console.log(data);
    const [showItem,setShowItem]=useState(false);
    const handelClick=()=>{
      console.log("clicked");
       setShowItem(!showItem);
    };
    return(
        <div>
     <div className="w-6/12 bg-gray-50 mx-auto shadow-lg my-4">
      <div className="flex justify-between p-3 "onClick={handelClick}>
      <span className="font-bold ">{data.data.title} ({data.data.itemCards.length})</span>
      <span>🔽</span>
      </div>  
        {showItem && <ItemList items={data.data.itemCards}/>}
      </div>  
    </div>
);
};
export default RestaurantCategory;
