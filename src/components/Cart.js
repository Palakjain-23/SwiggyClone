import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { clearCart } from "../utils/cartSlice";
import InnerCart from "./InnerCart";
import { Link } from "react-router-dom";

const Cart = () => {
    const items = useSelector((store) => store?.cart?.items);
    //console.log(items);
    const dispatch = useDispatch();
    const handelClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className="text-center m-0 p-0 bg-gray-100">
            <span className="font-bold text-2xl mt-5">Cart</span>
            <div className="w-6/12 m-auto">
                {items.length === 0 ? (
                    <div className="flex flex-col align-middle mt-5 pb-14">
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
                    <div className="mt-8 pb-20">
                        <div className="flex justify-between border-gray-200 border-b-2 font-semibold py-2">
                            <div className="w-1/4 py-2">
                                <span className="mx-24 place-items-start">Item</span>  
                            </div>
                            <div className="w-6/12 py-2 flex justify-evenly">
                                <div>
                                    <span className="mx-10">Quantity</span>
                                </div>
                                <div className="px-2">
                                    <button onClick={handelClearCart} className="px-2 rounded-lg border hover:border-white text-white bg-gray-800 ">Clear Cart</button>   
                                </div>
                            </div>    
                        </div>
                        {/* <button
                            className="p-2 m-2 bg-black text-slate-50 rounded-lg"
                            onClick={handelClearCart}>
                            Clear Cart
                        </button> */}
                        {/* <ItemList items = {cartItems} /> */}
                        <div className="mt-8 mb-10 bg-white p-2">
                            {items.map((item) => (  
                                <InnerCart cartData={item}
                                />                            
                             //here below code to be pasted if anything goes wrong
                            ))}
                        </div>
                        <div className=" border-gray-200 border-t-2">
                            <button className="p-2 rounded-lg border hover:border-red-500 text-white bg-red-400 m-5">Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Cart;

{/* <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                                    key={item?.card?.info?.id}>
                                    <div className="w-9/12">
                                        <div className="py-2">
                                            <span>{item?.card?.info?.name}</span>
                                            <span>- ⟨₹⟩
                                                {item?.card?.info?.price
                                                    ? item?.card?.info?.price / 100
                                                    : item?.card?.info?.defaultPrice / 100}
                                            </span>
                                        </div>
                                        <p className="text-xs "> {item?.card?.info?.description}</p>
                                    </div>
                                   
                                    
                                    <div className="w-3/12 p-4 relative">
                                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-full h-auto" />
                                        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                                            <button className="text-green-500 bg-white px-2 py-2 text-base font-bold" onClick={() => handleDecreaseQuantity(item?.card?.info?.id)}>-</button>
                                            <button className="text-green-500 bg-white border  px-2 py-2 text-base font-bold">{item?.card?.info?.quantity}</button>
                                            <button className="text-green-500 bg-white border  px-2 py-2 text-base font-bold" onClick={() => handleIncreaseQuantity(item?.card?.info?.id)}>+</button> 
                                        </div>
                                    </div>
                                </div> */}
