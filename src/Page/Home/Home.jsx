import ComingEvent from "../../Components/ComingEvent/ComingEvent";
import Banner from "../../Components/HomeComp/Banner/Banner";
// import TestBanner from "../../Components/HomeComp/Banner/TestBanner";
import Contact from "../../Components/HomeComp/Contact/Contact";
import Review from "../../Components/HomeComp/Review/Review";
import Services from "../../Components/HomeComp/Services/Services";
import Pricing from "../../Components/Pricing/Pricing";


const Home = () => {
   return (
      <div>
         <Banner></Banner>
         {/* <TestBanner></TestBanner> */}
         <Services></Services>
         <ComingEvent></ComingEvent>
         <Review></Review>
         <Pricing></Pricing>
         <Contact></Contact>
      </div>
   );
};

export default Home;