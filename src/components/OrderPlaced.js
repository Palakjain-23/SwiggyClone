import { Link } from "react-router-dom";

const OrderPlaced=()=>{
    return(
      // <div className=" flex justify-center w-full h-screen">
      //    <div className=" w-2/6 h-3/5 mt-28">
      //      <div className="flex justify-center mt-8" >
      //         <img alt="orderplaced" src="Order-Placed-Icon.jpg" className="w-52"></img>
      //      </div>
      //      <div className="text-center mt-6">
      //       <h3 className="font-bold text-lg">Your order has been successfully completed placed</h3>
      //       <Link to="/FlavourFleet/">
      //       <button className ="mt-10 p-2 text-white bg-green-400 border rounded-xl hover:border-green-400 ">Order More</button>
      //       </Link>
            
      //      </div>
           
      //    </div>

      // </div>
      <div className="w-full h-screen bg-purple-400 bg-opacity-10 flex justify-center items-center">
  <div className=" bg-white flex justify-center items-center flex-col bg-opacity-30 backdrop-blur-lg text-center p-4 rounded-md shadow-lg">
    <img alt="orderplaced" src="image-removebg-preview.png" className="w-52"></img>
    <h3 className="font-bold text-lg">Your order has been successfully completed placed</h3>
    <Link to="/FlavourFleet/">
      <button className ="mt-10 p-2 text-white bg-purple-400 border rounded-xl hover:border-purple-400 focus:outline-none">Order More</button>
    </Link>
  </div>
</div>
    );
}
export default OrderPlaced;
