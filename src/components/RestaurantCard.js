import { CDN_URL } from "../utils/constant";
import "../index.css";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name, avgRating,
        cuisines,
        costForTwo,
    } = resData?.info;

    return (

        <div className="m-4 p-4 w-72 h-96 bg-gray-100 hover:bg-gray-200 ">

            <img className="w-60 h-32 object-cover "
                src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;
