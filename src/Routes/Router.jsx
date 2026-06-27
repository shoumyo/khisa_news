import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Pages/Home";
import Category from "../Components/Pages/Category";

const router=createBrowserRouter(
    [
        {
            path:'/',
            Component:HomeLayout,
            children:[
                {
                    path:"",
                    Component:Home,
                },
                {
                    path:"/category/:id",
                    Component:Category,
                    loader:()=>fetch("/news.json"),
                }
            ]
        },
        {
            path:'/auth',
            element:<h2>Auth Layout</h2>
        },
        {
            path:'/news',
            element:<h2>News Layout</h2>
        },
        {
            path:'/*',
            element:<h2>eRROR404</h2>
        }
    ]
);

export default router;