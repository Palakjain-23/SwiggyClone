import { CDN_URL } from "../utils/constant";
import "../index.css";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name, avgRating,
        cuisines,
        costForTwo,
    } = resData.info;
    return (
        <div className="m-4 p-4 w-72 h-80   bg-gray-100  hover:bg-white rounded-2xl ">

            <img alt="images" className="w-60 h-32 object-cover "
                src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4">{name}</h3>
            <div className="flex">
                <div className="p-1"><img src="rating-xxl.png" className="w-6"/></div>
                <div className="p-1"><h4>{avgRating}</h4></div>
                <div className=" flex p-1 mr-1 ">
                    <div className="w-1 h-1 rounded-full bg-black relative top-3  mr-1"></div>
                    <h4>{resData.info.sla.deliveryTime} minutes</h4>
                </div>
            </div>
            <h4 className="overflow-x-hidden">{cuisines.join(",")}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};
export default RestaurantCard;
