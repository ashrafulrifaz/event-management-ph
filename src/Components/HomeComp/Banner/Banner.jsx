import bannerImage from '../../../assets/banner-image.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
   duration: 2000, 
   delay: 250, 
   offset: 100,
})

const Banner = () => {
   return (
      <div className="min-h-[85vh] max-w-[90%] mx-auto py-20">
         <div className="flex flex-col lg:flex-row items-center">
            <div className='w-full lg:w-1/2 text-center lg:text-left'>
               <h2 className="text-3xl md:text-6xl font-bold ">Unleash the Magic of Memorable Events with <span data-aos="fade-zoom-in" className='text-indigo-600'>EvenTo</span></h2>
               <p className="text-slate-700 text-lg mt-5">With a passion for creativity and a commitment to excellence, we transform ordinary events into extraordinary experiences. From live music concerts to award ceremonies, we meticulously plan and manage every detail, ensuring that your event is a seamless success.</p>
               <button className="bg-indigo-600 py-2 px-6 rounded text-white font-medium mt-5">Book Your Event</button>
            </div>
            <div className='w-full lg:w-1/2'>
               <img data-aos="fade-up" src={bannerImage} alt="" />
            </div>
         </div>
      </div>
  );
}


export default Banner;
