// import { ToastContainer } from "react-toastify";
import ComingEvent from "../../Components/ComingEvent/ComingEvent";
import Banner from "../../Components/HomeComp/Banner/Banner";
import Contact from "../../Components/HomeComp/Contact/Contact";
import Review from "../../Components/HomeComp/Review/Review";
import Services from "../../Components/HomeComp/Services/Services";
import Pricing from "../../Components/Pricing/Pricing";


const Home = () => {

   return (
      <div>
         <Banner></Banner>
         <Services></Services>
         <ComingEvent></ComingEvent>
         <Review></Review>
         <Pricing></Pricing>
         <Contact></Contact>     
      </div>
   );
};

export default Home;