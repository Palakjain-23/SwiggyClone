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
    const totalPrice = useSelector((store) => store.cart.totalPrice);
    return (
        <div className="text-center m-0 p-0 bg-gray-100">
                {items.length === 0 ? (
                    <div className="flex flex-col align-middle mt-0 pt-5 pb-20">
                        <div className="flex justify-center mb-8">
                            <img src="emptycart.png" className="w-60 h-auto flex justify-center" />
                        </div>
                        <div>
                        <h1 className="font-bold text-xl">Your cart is empty</h1>
                        <h3 className="text-sm mt-1">You can go to home page to view more restaurants</h3>
                        <button className=" w-1/5 mt-10 px-2 py-1 text-white bg-green-400 drop-shadow-xl font-bold border hover:border-green-500">
                        <Link to="/" className="flex justify-center">SEE RESTAURANTS NEAR YOU</Link>
                        </button>
                        </div>                        
                    </div>
                ) : (
                <div className="flex pb-20">
                <div className="flex justify-end w-9/12">
                    <div className=" w-9/12 mt-5">
                        <div className="flex justify-between border-gray-200 border-b-2 font-semibold py-2">
                            <div className="w-1/4 py-2">
                                <span className="mx-24 place-items-start">Item</span>  
                            </div>
                            <div className="w-6/12 py-2 flex justify-evenly">
                                <div>
                                    <span className="mx-10">Quantity</span>
                                </div>
                                <div className="px-2">
                                    <button onClick={handelClearCart} className="px-2 py-1 bg-gray-800 text-white border text-xs hover:border-black rounded-lg">Clear Cart</button>   
                                </div>
                            </div>    
                        </div>
                        <div className="mt-8 mb-10 bg-white px-2 py-1">
                            {items.map((item) => (  
                                <InnerCart cartData = {item}
                                />                            
                            ))}
                        </div>
                     </div>        
                </div>
                    <div className="w-1/4"> 
                    <div className="bg-white mx-5 mt-10 p-2 h-80 rounded-lg border hover:border-gray-200">
                       <div className="mx-3  py-4 border-b-2 border-gray-200 ">
                          <span className="font-bold ">Order Summary</span>
                       </div>
                       <div className="flex mt-2">
                            <span className="w-6/12 p-2">Item Total</span>
                            <span className="w-6/12 p-2">₹ {totalPrice.toFixed(2)}</span>
                       </div>                           
                       <div className="flex mt-2">
                            <span className="w-6/12 p-2">Delivery Charges</span>
                            <span className="w-6/12 p-2">00.00</span>
                       </div>
                       <div className="flex mt-2">
                            <span className="w-6/12 p-2">Tax</span>
                            <span className="w-6/12 p-2">00.00</span>
                       </div>
                       <div className="flex mt-2">
                            <span className="w-2/5 p-2">Total ₹ {totalPrice.toFixed(2)}</span>
                            <div className="w-3/5">
                                <Link to="/OrderPlaced">
                                <button onClick={handelClearCart} className="m-2 px-2 py-3  text-xs text-white font-bold rounded-lg border hover:border-red-500 bg-red-400">Place Order</button>
                                </Link>
                            </div>                   
                       </div>
                    </div>
                    </div>
                </div>
                )}
            
        </div>
    )
}
export default Cart;
