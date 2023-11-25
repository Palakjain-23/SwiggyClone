import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import OrderPlaced from "./components/OrderPlaced";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Search from "./components/Search";
const AppLayout = ()=>{
    return(
        <Provider  store={appStore}>           
            <div className="app">
            <Header />
            <Outlet/>
            <Footer />
            </div>
        </Provider>
    )
};
const appRouter = createBrowserRouter([
    {path:"/FlavourFleet/", element: <AppLayout/>,errorElement:<Error/>,children:[
        {path:"/FlavourFleet/", element:<Body/>},
        {path:"/FlavourFleet/search", element:<Search/>},
        {path:"/FlavourFleet/restaurants/:resId",element:<RestaurantMenu/>},
        {path:"/FlavourFleet/cart",element:<Cart/>}, 
     ]
    },
    {path:"/FlavourFleet/OrderPlaced",element:<OrderPlaced/>}, 

]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

