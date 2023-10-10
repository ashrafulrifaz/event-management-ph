import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
   const serviceData = useLoaderData()
   const {id} = useParams();

   const currentService = serviceData.find(service => service.id === id);
   const {name, image, details, price} = currentService;

   return (
      <div className="max-w-[90%] mx-auto py-16">         
         <h2 className="text-3xl text-center font-bold mb-4">About Our Service</h2>
         <img src={image} className="w-full rounded-2xl" />
         <h2 className="text-5xl font-bold mt-8">{name}</h2>
         <div className="inline-block mt-4 p-3 rounded-xl bg-slate-200">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
               <span className="font-semibold text-xl">Price: Start from {price}</span>
               <button className="bg-indigo-600 py-2 px-6 rounded-lg text-white text-lg font-medium">Book Your Event</button>
            </div>
         </div>
         <p className="font-medium text-lg mt-6 text-slate-600">{details}</p>
      </div>
   );
};

export default ServiceDetails;