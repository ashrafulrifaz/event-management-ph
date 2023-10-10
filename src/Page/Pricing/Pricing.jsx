import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import PriceBox from "./PriceBox";


const Pricing = () => {
   const {categoryItem, priceData, categoryID} = useContext(AuthContext)
   
   return (
      <div className="py-12 mx-auto max-w-[90%]">
         <h2 id="price-title" className="text-3xl font-bold text-black text-center">Explore Our All Packages and Choose</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {
               priceData.map((price, idx) => <PriceBox key={idx} price={price}></PriceBox>)
            }
         </div>
      </div>
   );
};

export default Pricing;