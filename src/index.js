import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const Grocery = lazy(()=>import("./components/Grocery"));
const AppLayout = ()=>{
    return(
        <div className="app">
        <Header />
          <Outlet/>
        </div>
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
    ]
}
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

