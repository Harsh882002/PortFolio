 import { AllLayout } from "../layout/AllLayout"
 import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from "./subAllRoutes/Home";
import {  Skills } from "./subAllRoutes/Projects";
import { About } from "./subAllRoutes/Resume";
import { Gallery } from "./subAllRoutes/Gallery";
import { Contact } from "./subAllRoutes/Contact";
 
export const AllRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <AllLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },

                {
                    path: "/skills",
                    element: <Skills />
                },

                {
                    path:"/about",
                    element:<About />
                },

                {
                    path:"/gallery",
                    element:<Gallery />
                },
                
                {
                    path:"contact",
                    element:<Contact />
                }


            ]
        }
    ])

    return (
        <>
<RouterProvider router={router} />
        </>
    )
}