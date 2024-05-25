import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import ServiceDetails from "../Component/ServiceDetails/ServiceDetails";
import Register from "../Page/Register/Register";
import PrivetRouter from "../Component/PrivetRouter/PrivetRouter";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/services.json')
        },
        {
          path:'/load/:id',
          element:<PrivetRouter><ServiceDetails></ServiceDetails></PrivetRouter>,
          loader:()=>fetch('/services.json')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
    
  ]);

  export default router