import { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext)

   if(loading){
      return <p className='py-20 font-semibold text-2xl text-center'>Loading...</p>
   }

   if(user){
      return children
   } else {
      return <Navigate to="/login"></Navigate>
   }
};

export default PrivateRoute;