import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import LeftMenuBar from '../../assets/left-menu.png'
import RightMenuBar from '../../assets/right-menu.png'
import CloseMenu from '../../assets/close.png'

const Header = () => {
   const {user, signOutUser} = useContext(AuthContext)
   const [isMenuActive, setIsMenuActive] = useState(false)
   const [isUserActive, setIsUserActive] = useState(false)

   const handleLogOut = () => {
      signOutUser()
   }

   return (
      <div className="py-5 bg-transparent z-10 border-b border-slate-200">
         <div className="grid grid-cols-3 items-center max-w-[90%] mx-auto relative">
            <Link to="/">
               <h1 className="text-center lg:text-left text-3xl font-semibold"><span className="font-bold text-indigo-600">E</span>ven<span className="font-bold text-indigo-600">T</span>o</h1>
            </Link>
            <div className="order-first lg:order-none lg:hidden">
               <img src={LeftMenuBar} className={`w-6 h-auto ${isMenuActive ? 'hidden' : 'block'}`} alt="" onClick={() => setIsMenuActive(true)} />
               <img src={CloseMenu} className={`w-5 h-auto ${isMenuActive ? 'block' : 'hidden'}`} alt="" onClick={() => setIsMenuActive(false)} />
               <div className={`border border-gray-200 py-5 px-20 bg-white top-10 rounded-xl absolute ${isMenuActive ? 'block' : 'hidden'} z-10`}>
                  <ul className="flex flex-col gap-5 justify-center" id="header_nav">
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
                        <NavLink className="text-[17px] font-medium hover:text-indigo-600" to="/pricing">Pricing</NavLink>
                     </li>
                     <li>
                        <NavLink className="text-[17px] font-medium hover:text-indigo-600" to="/contact">Contact</NavLink>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="hidden lg:block">
               <ul className="flex gap-5 justify-center" id="header_nav">
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
                     <NavLink className="text-[17px] font-medium hover:text-indigo-600" to="/pricing">Pricing</NavLink>
                  </li>
                  <li>
                     <NavLink className="text-[17px] font-medium hover:text-indigo-600" to="/contact">Contact</NavLink>
                  </li>
               </ul>
            </div>
            <div>
               {
                  user && <div className="md:hidden flex justify-end">
                  <img src={RightMenuBar} className={`w-6 h-auto ${isUserActive ? 'hidden' : 'block'}`} alt="" onClick={() => setIsUserActive(true)} />
                  <img src={CloseMenu} className={`w-5 h-auto ${isUserActive ? 'block' : 'hidden'}`} alt="" onClick={() => setIsUserActive(false)} />
                  </div>
               }
               {
                  user ? <div className={`${isUserActive ? 'flex' : 'hidden'} border border-gray-200 py-5 w-32 bg-white top-8 right-0 rounded-xl absolute md:hidden flex-col md:flex-row md:gap-3 space-y-3 md:space-y-0 items-center justify-end`}>
                  {
                     user?.displayName && <span className="font-medium">{user.displayName}</span>  
                  }
                  {
                     user?.photoURL && <img src={user.photoURL} alt="user" className="w-8 h-8 rounded-full order-first md:order-none" /> 
                  }
                  {
                     user ? 
                     <button onClick={handleLogOut} className="bg-indigo-600 py-1.5 px-4 rounded-lg text-white font-medium">Log Out</button>
                     : 
                     <Link to="/login">
                        <button className="bg-indigo-600 py-1.5 px-4 rounded-lg text-white font-medium">Login</button>
                     </Link> 
                  }
               </div> : <div className="flex justify-end md:hidden">
                  <Link to="/login">
                     <button className="bg-indigo-600 py-1.5 px-4 rounded-lg text-white font-medium">Login</button>
                  </Link>
               </div> 
               }
               <div className={`gap-3 hidden md:flex items-center justify-end`}>
                  {
                     user?.displayName && <span className="font-medium">{user.displayName}</span>  
                  }
                  {
                     user?.photoURL && <img src={user.photoURL} alt="user" className="w-8 h-8 rounded-full order-first md:order-none" /> 
                  }
                  {
                     user ? 
                     <button onClick={handleLogOut} className="bg-indigo-600 py-1.5 px-4 rounded-lg text-white font-medium">Log Out</button>
                     : 
                     <Link to="/login">
                        <button className="bg-indigo-600 py-1.5 px-4 rounded-lg text-white font-medium">Login</button>
                     </Link> 
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;