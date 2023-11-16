import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { clearCart } from "../utils/cartSlice";
import { increaseQuantity } from "../utils/cartSlice";
import { decreaseQuantity } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Countertops } from "@mui/icons-material";
const Cart = () => {
    const items = useSelector((store) => store?.cart?.items);
    console.log(items);
    const dispatch = useDispatch();
    const handelClearCart = () => {
        dispatch(clearCart());
      };
    
      const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseQuantity({ itemId }));
      };
    
      const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseQuantity({ itemId }));
      };
    const {name,price,defaultPrice,description,id,imageId} = items?.card?.info;
    console.log(name);
    
    return (
        <div className="text-center m-4 p-4 ">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                {items.length === 0 ? (
                    <div className="flex flex-col align-middle mt-5">
                        <div className="flex justify-center mb-8">
                            <img src="emptycart.png" className="w-60 h-auto flex justify-center" />
                        </div>
                        <div>
                        <h1 className="font-bold text-xl">Your cart is empty</h1>
                        <h3 className="text-sm">You can go to home page to view more restaurants</h3>
                        <button className=" w-2/4 mt-4 p-2 text-white bg-green-400 drop-shadow-xl font-bold">
                        <Link to="/" className="flex justify-center">SEE RESTAURANTS NEAR YOU</Link>
                        </button>
                        </div>
                        
                    </div>
                ) : (
                    <div>
                        <button
                            className="p-2 m-2 bg-black text-slate-50 rounded-lg"
                            onClick={handelClearCart}>
                            Clear Cart
                        </button>
                        {/* <ItemList items = {cartItems} /> */}
                        <div>
                            {items.map((item) => (
                                <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                                    key={id}>
                                    <div className="w-9/12">
                                        <div className="py-2">
                                            <span>{name}</span>
                                            <span>- ⟨₹⟩
                                                {price
                                                    ? price / 100
                                                    : defaultPrice / 100}
                                            </span>
                                        </div>
                                        <p className="text-xs "> {description}</p>
                                    </div>

                                    <div className="w-3/12 p-4 relative">
                                        <img src={CDN_URL + imageId} className="w-full h-auto" />
                                        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                                            <button className="text-green-500 bg-white px-2 py-2 text-base font-bold" onClick={() => handleDecreaseQuantity(item?.card?.info?.id)}>-</button>
                                            <button className="text-green-500 bg-white border  px-2 py-2 text-base font-bold">{item.quantity}</button>
                                            <button className="text-green-500 bg-white border  px-2 py-2 text-base font-bold" onClick={() => handleIncreaseQuantity(item?.card?.info?.id)}>+</button> 
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Cart;
