import { useEffect, useState } from "react";
import "./Review.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ReviewCard from "./ReviewCard"
import { Autoplay, Pagination } from 'swiper/modules';
// import ReviewCard from "./ReviewCard";

const Review = () => {
   const [reviewData, setReviewData] = useState([])

   useEffect(() => {
      fetch('review.json')
         .then(res => res.json())
         .then(data => setReviewData(data))
   },[])

   return (
      <div className="py-10 max-w-[90%] mx-auto">         
         <h2 className="text-center font-bold text-4xl">Upcoming Events</h2>
         <p className="text-center text-lg mt-3 font-medium">The service we can provide for you</p>
         <div className="mt-8">
            <Swiper
               slidesPerView={3}
               spaceBetween={30}
               autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
               }}
               pagination={{
               clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper mt-10"
            >
               {
                  reviewData.map((review, idx) => <SwiperSlide key={idx}><ReviewCard review={review}></ReviewCard></SwiperSlide>)
               }
            </Swiper>
         </div>
      </div>
  );
};

export default Review