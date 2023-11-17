import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
   
    const dispatch = useDispatch();
    const handelAddItem = (item) => {
        console.log(item);
        dispatch(addItem(item));
    }
   // console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                    key={item?.card?.info?.id}>
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>- ⟨₹⟩
                            {item?.card?.info.price
                            ? item?.card?.info?.price / 100
                            : item?.card?.info?.defaultPrice/100}
                            </span>
                        </div>    
                            <p className="text-xs "> {item?.card?.info?.description}</p>
                     </div>                        
                        <div className="w-3/12 p-4 ">
                        <div className="absolute">
                             <button className="bg-black mx-16 text-white text-sm rounded-br-lg rounded-tr-lg p-1 hover:text-black hover:bg-white hover:border-black"
                             onClick={() => handelAddItem(item)} >
                             + ADD
                             </button>                           
                        </div>
                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-full"/>   
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ItemList;
