import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";


const PriceCategory = ({item}) => {
   const {name, id} = item
   const {categoryID, setCategoryID} = useContext(AuthContext)

   const handleCategoryBtn = () =>{
      setCategoryID(id)
   }

   return (
      <li>
         <NavLink onClick={handleCategoryBtn} className='text-lg font-semibold text-gray-600 hover:bg-slate-100 block px-4 py-1.5 rounded-xl'>{name}</NavLink>
      </li>
   );
};

export default PriceCategory;