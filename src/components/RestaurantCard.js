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
    // hover:w-64 hover:h-72
    return (
        <div className="mx-2 my-5 pt-5 pb-5 w-64 h-72  rounded-3xl  hover:cursor-pointer transition-transform duration-300 transform hover:scale-95">

            <img alt="images" className="w-60 h-32 object-cover drop-shadow-md rounded-md align-middle  transform: scale(1.1);"
                src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-2 font-Basis_Grotesque_Pro(woff2)">{name}</h3>
            <div className="flex">
                <div className="p-1"><img src="rating-xxl.png" className="w-6 drop-shadow-md"/></div>
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
