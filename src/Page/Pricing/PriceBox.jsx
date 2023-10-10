import checkImg from '../../assets/check.png'

const PriceBox = ({price}) => {
   const {name, features, item_price, category} = price

   return (
      <div className="pt-12 pb-6 px-8 border border-indigo-200 rounded-lg flex flex-col justify-between overflow-hidden relative">
         <div>
            <h4 className="nline px-12 absolute top-5 -rotate-45 -left-10 uppercase font-semibold text-indigo-600 bg-indigo-200 pt-2 pb-1 rounded-lg mx-auto">{name}</h4>
            <h3 className='text-center font-semibold text-2xl mt-5'>{category}</h3>
            <h2 className="text-5xl font-bold text-center font-sans mt-6"><span className="font-semibold text-2xl">From</span> {item_price}</h2>
            <hr className="mx-auto w-11/12 my-8 h-0.5 bg-gray-200"/>
            <h4 className='text-xl font-semibold mb-3 '>Features</h4>
            <ul className='space-y-2'>
               {
                  features.map( (feature, idx) => 
                     <li className="flex gap-2 items-center" key={idx}>
                  <div className='w-6'>
                     <img src={checkImg} alt="check" className='w-5 border border-black rounded-full p-0.5' />
                  </div>
                  <p className='font-medium text-lg'>Life time technical support</p>
               </li>
               )}
            </ul>
         </div>
         <button className='w-full rounded-md py-2 font-semibold bg-indigo-600 mt-6 text-white'>Buy Now</button>
      </div>
   );
};

export default PriceBox;