import "./Banner.css";

const BannerCard = ({banner}) => {
   const {title, description} = banner

   return (
      <div className="pb-10 pt-16 h-screen grid content-center banner">
         <div className="text-center space-y-5 max-w-[90%] mx-auto">
            <h2 className="text-6xl font-bold text-white">{title}</h2>
            <p className="text-slate-300 text-lg px-44">{description}</p>
            <button className="bg-indigo-600 py-2 px-6 rounded text-white text-lg font-medium mt-5">
            Book Your Event
            </button>
         </div>
      </div>
   );
};

export default BannerCard;