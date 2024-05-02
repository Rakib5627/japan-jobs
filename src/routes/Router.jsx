import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import FindJobs from "../pages/Job/FindJobs";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root> ,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
            },
            {
                path: '/jobs',
                element: <FindJobs></FindJobs>, 
            },
            {
                path: '/job-culture',
                element:<About></About>
            },

           
           
        ]
    }    
]);

export default router;