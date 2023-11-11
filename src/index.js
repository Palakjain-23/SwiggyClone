import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = ()=>{
    const [userName,setUserName]=useState();
    
useEffect(()=>{
    const data={
        name : "Palak Jain"
    }
    setUserName(data.name);
},[]);
    return(
        <Provider  store={appStore}>
             <UserContext.Provider value={{loggedInUser:userName}}>
            <div className="app">
            <Header />
            <Outlet/>
            </div>
        </UserContext.Provider>
        </Provider>
    )
};
const appRouter = createBrowserRouter([
    {path:"/", element: <AppLayout/>,errorElement:<Error/>,children:[
        {path:"/", element:<Body/>},
        {path:"/contact",element:<Contact/>},
        {path:"/about",element:<About/>},
        {path:"/grocery",element:<Suspense fallback={<div>
            <h1>Loading......</h1>
        </div>}><Grocery/></Suspense>}, 
        {path:"/restaurants/:resId",element:<RestaurantMenu/>},
        {path:"/cart",element:<Cart/>},  
    ]
}
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

