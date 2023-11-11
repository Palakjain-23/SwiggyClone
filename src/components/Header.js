import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const {loggedInUser}=useContext(UserContext);

  const [btnNameReact, setbtnNameReact] = useState("Login");
  
  const onlineStatus = useOnlineStatus();
  
  const cartItems = useSelector((store)=>store.cart.items);
  return (
    <div className="flex justify-between bg-blue-100 shadow-lg">
      <div className="w-28">
      <img  className="w-20 m-2" src="food-logo.png" alt="logo_image"></img>
      </div>
      <div >
        <ul className="flex p-8">
          <li className="mx-4">online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/contact">Contact</Link></li>
          <li className="mx-4">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mx-4 font-bold [0]">
          <Link to="/cart">
          Cart - ({cartItems.length})
          </Link>
          </li>
          <button className="mx-4 border border-solid" onClick={() => {
            btnNameReact === "Login" ? setbtnNameReact("Logout")
              : setbtnNameReact("Login");
          }}>{btnNameReact}</button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
