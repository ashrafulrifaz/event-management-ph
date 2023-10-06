import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";

const Route = createBrowserRouter([
   {
      path: '/',
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>
   },
])

export default Route;