import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import EventCard from "./EventCard";


const ComingEvent = () => {
   const {eventItem} = useContext(AuthContext)

   return (
      <div className="py-12 max-w-[90%] mx-auto">
         <h2 className="text-center font-bold text-4xl">Upcoming Events</h2>
         <p className="text-center text-lg mt-3 font-medium">The service we can provide for you</p>
         <div className="grid grid-cols-4 gap-5 mt-8">
            {
               eventItem.map((event, idx) => <EventCard key={idx} event={event}></EventCard>)
            }
         </div>
      </div>
   );
};

export default ComingEvent;