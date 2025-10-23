import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layout/HomeLayout";

import About from "../Pages/About";
import Game from "../Pages/Game";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Banner from "../Pages/Banner";
import ProductDetails from "../Pages/ProductDetails";

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
              path:'/about',
              Component:About   
            },
            {
                path:'/game',
                Component:Game
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
            }
        ]
    }
])