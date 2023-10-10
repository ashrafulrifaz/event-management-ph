import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <div className="border-t border-slate-200 py-10">
         <footer className=" max-w-[90%] mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
               <div className="col-span-2">
                  <h1 className="text-3xl font-semibold"><span className="font-bold text-indigo-600">E</span>ven<span className="font-bold text-indigo-600">T</span>o</h1>
               </div>
               <ul className="flex gap-5">
                  <li>
                     <Link to="/about" className="font-medium hover:text-indigo-600 text-base lg:text-lg text-slate-600">About Us</Link>
                  </li>
                  <li>
                  <Link to="/services" className="font-medium hover:text-indigo-600 text-base lg:text-lg text-slate-600">Services</Link>
                  </li>
                  <li>
                  <Link to="/pricing" className="font-medium hover:text-indigo-600 text-base lg:text-lg text-slate-600">Pricing</Link>
                  </li>
                  <li>
                  <Link to="/contact" className="font-medium hover:text-indigo-600 text-base lg:text-lg text-slate-600">Contact</Link>
                  </li>
               </ul>
            </div>
            <hr className="my-5" />
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
               <p className="text-[17px]">© 2023 EvenTo All Rights Reserved</p>
               <ul className="flex gap-5">
                  <li>
                     <a href="https://facebook.com">
                        <img src={facebook} className='w-5 hover:scale-110 hover:-rotate-12' alt="" />
                     </a>
                  </li>
                  <li>
                     <a href="https://instagram.com">
                        <img src={instagram} className='w-5 hover:scale-110 hover:-rotate-12' alt="" />
                     </a>
                  </li>
                  <li>
                     <a href="https://x.com">
                        <img src={twitter} className='w-5 hover:scale-110 hover:-rotate-12' alt="" />
                     </a>
                  </li>
                  <li>
                     <a href="https://linkedin.com">
                        <img src={linkedin} className='w-5 hover:scale-110 hover:-rotate-12' alt="" />
                     </a>
                  </li>
               </ul>
            </div>
         </footer>
      </div>
   );
};

export default Footer;