import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layout/HomeLayout";

import About from "../Pages/About";
import Game from "../Pages/Game";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Banner from "../Pages/Banner";
import ProductDetails from "../Pages/ProductDetails";
import Profile from "../Pages/Profile";
import ProfileUpdate from "../Pages/ProfileUpdate";
import AboutDeveloper from "../Pages/AboutDeveloper";
import UpcomingGames from "../Pages/UpcomingGames";


export const router=createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
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
                Component:ProductDetails,
                loader:()=> fetch('/Games.json')
            },{
                path:'/profile',
                Component:Profile
            },
            {
                path:'/profile/update',
                Component:ProfileUpdate
            },
            {
                path:'/about/developer',
                Component:AboutDeveloper
            }
        ]
    }
])