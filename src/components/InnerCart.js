import { increaseQuantity } from "../utils/cartSlice";
import { decreaseQuantity } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const InnerCart=(props)=>{

      const dispatch = useDispatch();
      const handleRemove=(itemId)=>{
        dispatch(removeItem({itemId}));
      }
      const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseQuantity({ itemId }));
      };
      const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseQuantity({ itemId }));
      };
    // const {cartData}=props;
    const { cartData } = props; 

    //console.log(cartData);
    const {name,price,defaultPrice,description,imageId,id}=cartData?.card?.info;
    //console.log("quantity",cartData.quantity);
    // const [quantityItem]=useState(quantity);
    return(
        <div className="border-gray-200 border-b-2 text-left py-4 flex justify-between h-40"
            key={id}>
            <div className="w-3/4 ">
                <div className="py-2">
                    <span className="font-semibold">{name}</span>
                    <span>- ⟨₹⟩{price
                        ?price / 100
                        :defaultPrice/100}                                
                        </span>
                </div>
                <p className="text-xs ">{description}</p>
            </div>
            <div className="w-2/4 px-10 py-4  relative">
                <img src={CDN_URL + imageId} className="w-full h-auto object-cover" />
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <button className="text-green-500 bg-white px-2 py-2 text-base font-bold" onClick={() => handleDecreaseQuantity(id)}>
                    <RemoveIcon/>
                    </button>
                     <input
                      className="text-green-500 w-11 bg-white border  px-2 py-2  text-2xl text-base font-bold text-center outline-none"
                      type="number"
                      placeholder="1"
                      value={cartData.quantity}
                      readOnly
                      />
                    <button className="text-green-500 bg-white border  px-2 py-2 text-base font-bold" onClick={() => handleIncreaseQuantity(id)}>                    
                    <AddIcon/>
                    </button> 
                </div>
            </div>
            <div className="w-1/4 flex justify-center items-center">
                <button onClick={() => handleRemove(id)}>
                    <DeleteRoundedIcon  fontSize="large"/>
                </button>
            </div>
        </div> 
    )
}
export default InnerCart;
