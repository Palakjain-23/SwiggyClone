import { LOGO_CDN } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-blue-100">
      <div className="w-28">
      <img  className="w-28 m-2" src="food-logo.png"></img>
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
          <button className="mx-4 border border-solid" onClick={() => {
            btnNameReact === "Login" ? setbtnNameReact("Logout")
              : setbtnNameReact("Login");
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
