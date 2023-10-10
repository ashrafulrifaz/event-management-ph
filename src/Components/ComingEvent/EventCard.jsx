import LocationImage from '../../assets/location.png'
import TimeImage from '../../assets/clock.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
   duration: 2000, 
   delay: 250, 
   offset: 100,
})

const EventCard = ({event}) => {
   const {title, image, location, date} = event

   return (
      <div data-aos="fade-down" className="rounded-xl relative hover:-translate-y-3 transition">
         <img src={image} alt="event" className="w-full h-96 rounded-xl" />
         <div className="p-4 absolute bottom-0 bg-[rgba(0,0,0,0.5)] w-full text-white rounded-b-xl">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className='flex gap-3 mt-3 font-medium text-[17px]'><img src={LocationImage} alt="location" className='w-5 h-5' />{location}</p>
            <p className='flex gap-3 mt-1 font-medium text-[17px]'><img src={TimeImage} alt="location" className='w-5 h-5' />{date}</p>
         </div>
      </div>
   );
};

export default EventCard;