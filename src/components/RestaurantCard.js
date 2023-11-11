import { CDN_URL } from "../utils/constant";
import "../index.css";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name, avgRating,
        cuisines,
        costForTwo,
    } = resData?.info;
    const {loggedInUser} = useContext(UserContext);
    return (

        <div className="m-4 p-4 w-72 h-96 bg-gray-100 hover:bg-gray-200 ">

            <img className="w-60 h-32 object-cover "
                src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
            <h4> User : {loggedInUser}</h4>
        </div>
    );
};

export default RestaurantCard;
