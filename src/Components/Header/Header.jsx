import { Link, NavLink } from "react-router-dom";

const Header = () => {
   return (
      <div className="py-5 bg-transparent z-10">
         <div className="flex justify-between items-center max-w-[90%] mx-auto">
            <Link to="/">
               <h1 className="text-3xl font-semibold"><span className="font-bold text-indigo-600">E</span>ven<span className="font-bold text-indigo-600">T</span>o</h1>
            </Link>
            <ul className="flex gap-5" id="header_nav">
               <li>
                  <NavLink className="text-[17px] font-medium hover:text-indigo-600" to="/">Home</NavLink>
               </li>
               <li>
                  <NavLink className="text-[17px] font-medium hover:text-indigo-600" to="/about">About</NavLink>
               </li>
               <li>
                  <NavLink className="text-[17px] font-medium hover:text-indigo-600" to="/services">Services</NavLink>
               </li>
               <li>
                  <NavLink className="text-[17px] font-medium hover:text-indigo-600" to="/contact">Contact</NavLink>
               </li>
            </ul>
            <Link to="/login">
            <button className="bg-indigo-600 py-1.5 px-4 rounded-lg ml-10 text-white font-medium">Login</button>
            </Link>
         </div>
      </div>
   );
};

export default Header;