import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-lg">
      <div className="mx-6 my-2">
        <img className="w-24 " src="food-logo.png" alt="logo_image"></img>
      </div>
      <div >
        <ul className="flex p-8 m-2 text-lg">
        <li className={`mx-5 p-2 ${location.pathname === '/FlavourFleet/' ? 'text-green-500' : ''}`}>
            <Link to="/FlavourFleet/" className="flex justify-center">
              <HomeIcon fontSize="medium"/>Home
            </Link>
          </li>
          <li className={`mx-7 p-2 ${location.pathname === '/FlavourFleet/search' ? 'text-green-500' : ''}`}>
            <Link to="/FlavourFleet/search" className="flex justify-center">
              <SearchIcon />Search
            </Link>
          </li>
          <li className={`mx-7 p-2 ${location.pathname === '/FlavourFleet/cart' ? 'text-green-500' : ''}`}>
            <Link to="/FlavourFleet/cart" className="flex justify-center mx-1">
              <ShoppingCartIcon /> Cart({cartItems.length})
            </Link>
          </li>
          <button className="mx-7 border bg-red-500 hover:border-red-600 shadow-lg p-2 rounded-lg font-bold" onClick={() => {
            btnNameReact === "Login" ? setbtnNameReact("Logout")
              : setbtnNameReact("Login");
          }}>
          {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
