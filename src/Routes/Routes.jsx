import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/home";
import ServiceDetails from "../pages/Service/ServiceDetails";
import AddService from "../pages/AddService/AddService";
import Contact from "../pages/Contact/Contact";
import TestimonialSection from "../components/Testimonial/TestimonialSection";
import PricingPage from "../pages/PricingPage/PricingPage";
import Service from "../pages/Service/Service";

const router= createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/contact",
                element:<Contact></Contact>,
            },
            {
                path:"/pricing",
                element:<PricingPage></PricingPage>,
            },
            {
                path:"/service",
                element:<Service></Service>,
            },
            {
                path:"/addService",
                element:<AddService></AddService>,
            },
          
            {
                path:"/team",
                element:<TestimonialSection></TestimonialSection>,
            },
          
            {
                path:"/api/projects/:id",
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/api/projects/${params.id}`)
            },
          
          
        
        
        ]
    }
])
export default router;