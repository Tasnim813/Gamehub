import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Game from "../Pages/Game";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                index:true,
                Component:Home
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
            }
        ]
    }
])