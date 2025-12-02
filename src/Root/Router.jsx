import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layout/HomeLayout";


import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Banner from "../Pages/Banner";
import ProductDetails from "../Pages/ProductDetails";
import Profile from "../Pages/Profile";
import ProfileUpdate from "../Pages/ProfileUpdate";
import AboutDeveloper from "../Pages/AboutDeveloper";
import UpcomingGames from "../Pages/UpcomingGames";
import PrivateRout from "../PrivateRoute/PrivateRout";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPassword from "../Pages/ForgetPassword";
import TopRatedGamesSection from "../Pages/TopRatedGamesSection.jsx";


export const router=createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                Component:Banner
            },
            {
              path:'/upcoming',
              Component:UpcomingGames
          
            },
           
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/product/:id',
                // element:<PrivateRout>
                //     <ProductDetails></ProductDetails>
                // </PrivateRout>,
                Component:ProductDetails,
                loader:()=> fetch('/Games.json')
            },{
                path:'/profile',
                element:<PrivateRout>
                    <Profile></Profile>

                </PrivateRout>
            },
            {
                path:'/profile/update',
                Component:ProfileUpdate
            },
            {
                path:'/about/developer',
                Component:AboutDeveloper
            },{
                path:'/forget-password',
                Component:ForgetPassword
            },
            
        ]
    }
])