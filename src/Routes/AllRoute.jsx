 import { AllLayout } from "../layout/AllLayout"
 import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from "./subAllRoutes/Home";
import { AllProjects } from "./subAllRoutes/Projects";
import { Resume } from "./subAllRoutes/Resume";
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
                    path: "/projects",
                    element: <AllProjects />
                },

                {
                    path:"/resume",
                    element:<Resume />
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