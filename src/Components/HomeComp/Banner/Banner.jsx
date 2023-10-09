import { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import "./Banner.css";

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import BannerCard from "./BannerCard";

const Banner = () => {
   const [bannerData, setBannerData] = useState([]);

   useEffect(() => {
      fetch('banner.json')
         .then(res => res.json())
         .then(data => setBannerData(data))
   }, [])

   return (
      <div className="min-h-[100vh] -z-10">
         <div>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
               delay: 10000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
         >
            {
               bannerData.map((banner,idx) => <SwiperSlide key={idx}><BannerCard banner={banner}></BannerCard></SwiperSlide>)
            }
         </Swiper>
         </div>
      </div>
  );
}


export default Banner;
