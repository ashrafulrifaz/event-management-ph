import { Link } from 'react-router-dom';
import errorImage from '../../assets/404.jpg'

const ErrorPage = () => {
   return (
      <div className='py-10 text-center'>
         <img src={errorImage} autoPlay alt="404" className='w-1/2 mx-auto' />
         <Link to="/" className='bg-[#FE4E5A] py-1.5 px-4 rounded text-white font-medium'>Back to Home</Link>
      </div>
   );
};

export default ErrorPage;