import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
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
    {path:"/", element: <AppLayout/>,errorElement:<Error/>,children:[
        {path:"/", element:<Body/>},
        {path:"/search", element:<Search/>},
        {path:"/restaurants/:resId",element:<RestaurantMenu/>},
        {path:"/cart",element:<Cart/>},  
    ]
}
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

