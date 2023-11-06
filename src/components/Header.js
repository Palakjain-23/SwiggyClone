import {LOGO_CDN} from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
const Header =()=>{
  const[btnNameReact,setbtnNameReact]=useState("Login");
  return (
  <div className="header">
  <div className="logo-container">
  <img
  className="logo" src={LOGO_CDN}></img>
  </div> 
  <div className="nav-items">
  <ul>
  <li>
  <Link to ="/">Home</Link>
  </li>
  <li>
  <Link to ="/contact">Contact</Link></li>
  <li>
  <Link to ="/about">About</Link>
  </li>
  <button className="btn" onClick={()=>{
  btnNameReact=="Login"?setbtnNameReact("Logout")
    :setbtnNameReact("Login");
  }}>{btnNameReact}</button>
  </ul>
  </div> 
  </div>
  ); 
  };
  export default Header;
