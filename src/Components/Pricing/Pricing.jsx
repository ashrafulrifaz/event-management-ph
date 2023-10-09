import { useContext } from 'react';
import PriceCard from './PriceCard';
import PriceCategory from './PriceCategory';
import { AuthContext } from '../../Provider/Provider';
import { Link } from 'react-router-dom';

const Pricing = () => {
   const {categoryItem, priceData, categoryID} = useContext(AuthContext)

   const currentPriceData = priceData.filter(data => categoryID === data.category_id)

   return (
      <div className="py-10 max-w-[90%] mx-auto">
         <div className="grid grid-cols-3 gap-5">
            <div>
               <div className='p-8 shadow-lg rounded-xl'>
                  <h2 className='text-3xl font-bold text-black'>Choose Our Plans</h2>
                  <p className="text-lg mt-3 font-medium">The service we can provide for you</p>
                  <ul className="grid gap-2 mt-6">
                     {
                        categoryItem.map(item => <PriceCategory key={item.id} item={item}></PriceCategory>)
                     }
                  </ul>
                  <Link to="/pricing">
                     <button className='px-5 rounded-md py-2 font-semibold bg-indigo-600 mt-6 text-white'>See All Plans</button>
                  </Link>
               </div>
            </div>
            <div className='col-span-2 grid grid-cols-2 gap-5'>
               { currentPriceData.length > 0 ?
                  currentPriceData.map((price, idx) => <PriceCard key={idx} price={price}></PriceCard>)
                  :
                  priceData.map((price, idx) => <PriceCard key={idx} price={price}></PriceCard>).slice(0,2)
               }
            </div>
         </div>
      </div>
   );
};

export default Pricing;