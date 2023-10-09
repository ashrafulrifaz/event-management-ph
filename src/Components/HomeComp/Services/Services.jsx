import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
   const [serviceData, setServiceData] = useState([])

   useEffect(() => {
      fetch('services.json')
      .then(res => res.json())
      .then(data => setServiceData(data))
   }, [])

   return (
      <div className="py-10 max-w-[90%] mx-auto">
         <h2 className='text-3xl font-bold text-black text-center'>Explore Our Services</h2>
         <p className="text-lg text-center mt-3 font-medium">The service we can provide for you</p>
         <div className="grid grid-cols-3 gap-8 mt-4">
            {
               serviceData.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
         </div>
      </div>
   );
};

export default Services;