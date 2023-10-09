import { Link } from "react-router-dom";
import priceImg from '../../../assets/credit.png'


const ServiceCard = ({service}) => {
   const {id, name, image, price, description} = service

   return (
      <div className="rounded-xl shadow-xl px-5 py-8 border-t-4 border-indigo-500">
         <img src={image} alt="service" className="rounded-xl h-52 w-full" />
         <h3 className="text-xl font-semibold mt-3">{name}</h3>
         <p className="my-1 font-medium">{description}</p>
         <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
               <img src={priceImg} className="w-6" alt="" />
               <p className="text-lg font-medium">{price}</p>
            </div>
            <Link to={`/services/${id}`}>
               <button className="bg-indigo-600 pt-2 pb-1.5 px-3 rounded-md text-white font-semibold mt-2 leading-relaxed text-sm ">View Details</button>
            </Link>
         </div>
         <div className="">
            
         </div>
      </div>
   );
};

export default ServiceCard;