import { useContext } from 'react';
import PriceCard from './PriceCard';
// import PriceCategory from './PriceCategory';
import { AuthContext } from '../../Provider/Provider';
import { Link, NavLink } from 'react-router-dom';

const Pricing = () => {
   const { priceData, categoryID, setCategoryID} = useContext(AuthContext)
   const currentPriceData = priceData.filter(data => categoryID == data.category_id)

   return (
      <div className="py-10 max-w-[90%] mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div>
               <div className='p-8 shadow-lg rounded-xl text-center lg:text-left'>
                  <h2 className='text-3xl font-bold text-black'>Choose Our Plans</h2>
                  <p className="text-lg mt-3 font-medium">Coose the plan what you need</p>
                  <ul className="grid gap-2 mt-6" id='pricing_nav'>
                     <li>
                        <NavLink onClick={() => setCategoryID(1)} className='text-lg font-semibold text-gray-600 hover:bg-slate-200 block px-4 py-1.5 rounded-xl'>Live Music</NavLink>
                     </li>
                     <li>
                        <NavLink onClick={() => setCategoryID(2)} className='text-lg font-semibold text-gray-600 hover:bg-slate-200 block px-4 py-1.5 rounded-xl'>Comedy Show</NavLink>
                     </li>
                     <li>
                        <NavLink onClick={() => setCategoryID(3)} className='text-lg font-semibold text-gray-600 hover:bg-slate-200 block px-4 py-1.5 rounded-xl'>Magic Show</NavLink>
                     </li>
                     <li>
                        <NavLink onClick={() => setCategoryID(4)} className='text-lg font-semibold text-gray-600 hover:bg-slate-200 block px-4 py-1.5 rounded-xl'>Award & Prize Ceremony</NavLink>
                     </li>
                     <li>
                        <NavLink onClick={() => setCategoryID(5)} className='text-lg font-semibold text-gray-600 hover:bg-slate-200 block px-4 py-1.5 rounded-xl'>Film Screenings and Premieres</NavLink>
                     </li>
                     <li>
                        <NavLink onClick={() => setCategoryID(6)} className='text-lg font-semibold text-gray-600 hover:bg-slate-200 block px-4 py-1.5 rounded-xl'>Theatre and Performing Arts</NavLink>
                     </li>
                  </ul>
                  <Link to="/pricing">
                     <button className='px-5 rounded-md py-2 font-semibold bg-indigo-600 mt-6 text-white'>See All Plans</button>
                  </Link>
               </div>
            </div>
            <div className='col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5'>
               { currentPriceData.length > 0 ?
                  currentPriceData.map((price, idx) => <PriceCard key={idx} price={price}></PriceCard>).slice(0, 2)
                  :
                  priceData.map((price, idx) => <PriceCard key={idx} price={price}></PriceCard>).slice(0,2)
               }
            </div>
         </div>
      </div>
   );
};

export default Pricing;