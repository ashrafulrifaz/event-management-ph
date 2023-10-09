import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../../Components/Footer/Footer";


const Layout = () => {
   return (
      <div>
         <Header></Header>
         <Outlet></Outlet>    
         <Footer></Footer>     
      </div>
   );
};

export default Layout;