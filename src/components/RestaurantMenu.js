import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {MENU_API} from "../utils/constant";
import "../index.css";
const RestaurantMenu=()=>{
    const {resId} = useParams();
    const[resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();

    },[])
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId );
            const json = await data.json();
            setResInfo(json);
            console.log(resInfo);
    } ;
    if  (resInfo === null) return <Shimmer/>;
    const {name,cuisines,costForTwoMessage}=resInfo?.data.cards[0]?.card?.card?.info;
    const{itemCards}=resInfo?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return(
        <div>
            <h1>{name}</h1>
            <p>
            {cuisines.join(",")}-{costForTwoMessage}
            </p>
            <h3>Menu</h3>
            <ul>
            {itemCards.map((item)=>(
                 <li key={item.card.info.id}>
                 {item.card.info.name}-{" Rs "}
                    {item.card.info.price/100}</li>
                 ))}
            </ul>
        </div>
    )
}
export default RestaurantMenu;
