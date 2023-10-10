import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import ServiceDetails from "../Page/ServiceDetails/ServiceDetails";
import About from "../Page/About/About";
import Layout from "../Components/Layout/Layout";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Pricing from "../Page/Pricing/Pricing";
import Contact from "../Page/Contact/Contact";
import Services from "../Page/Services/Services";

const Route = createBrowserRouter([
   {
      path: '/',
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/about',
            element: <About></About>
         },
         {
            path: '/services',
            element: <Services></Services>
         },
         {
            path: '/services/:id',
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader: () => fetch('https://ashrafulrifaz.github.io/api/services.json')
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/pricing',
            element: <PrivateRoute><Pricing></Pricing></PrivateRoute>
         },
         {
            path: '/contact',
            element: <PrivateRoute><Contact></Contact></PrivateRoute>
         }
      ]
   }
])

export default Route;