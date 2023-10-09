import checkImg from '../../assets/check.png'

const PriceCard = ({price}) => {
   const {name, features, item_price} = price

   return (
      <div className="py-12 px-8 border border-indigo-200 rounded-lg">
         <h4 className="w-2/6 text-center uppercase font-semibold text-indigo-600 bg-indigo-200 pt-2 pb-1 rounded-lg mx-auto">{name}</h4>
         <h2 className="text-5xl font-bold text-center font-sans mt-6"><span className="font-semibold text-2xl">From</span> {item_price}</h2>
         <hr className="mx-auto w-11/12 my-8 h-0.5 bg-gray-200"/>
         <ul className='space-y-2'>
            <li className="flex gap-2 items-center">
               <div className='w-6'>
                  <img src={checkImg} alt="check" className='w-5 border border-black rounded-full p-0.5' />
               </div>
               <p className='font-medium text-lg'>Life time technical support</p>
            </li>
            <li className="flex gap-2 items-center">
               <div className='w-6'>
                  <img src={checkImg} alt="check" className='w-5 border border-black rounded-full p-0.5' />
               </div>
               <p className='font-medium text-lg'>Life time technical support</p>
            </li>
            <li className="flex gap-2 items-center">
               <div className='w-6'>
                  <img src={checkImg} alt="check" className='w-5 border border-black rounded-full p-0.5' />
               </div>
               <p className='font-medium text-lg'>Life time technical support</p>
            </li>
            <li className="flex gap-2 items-center">
               <div className='w-6'>
                  <img src={checkImg} alt="check" className='w-5 border border-black rounded-full p-0.5' />
               </div>
               <p className='font-medium text-lg'>Life time technical support</p>
            </li>
            <li className="flex gap-2 items-center">
               <div className='w-6'>
                  <img src={checkImg} alt="check" className='w-5 border border-black rounded-full p-0.5' />
               </div>
               <p className='font-medium text-lg'>Life time technical support</p>
            </li>
         </ul>
         <button className='w-full rounded-md py-2 font-semibold bg-indigo-600 mt-6 text-white'>Buy Now</button>
      </div>
   );
};

export default PriceCard;