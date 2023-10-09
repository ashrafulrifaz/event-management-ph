import GoogleIcon from '../../assets/google.png'
import GithubIcon from '../../assets/github.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/Provider';

const Login = () => {
   const {signIn} = useContext(AuthContext)
   const navigate = useNavigate()
   const [erroMessage, setErroMessage] = useState('')
   const [showPass, setShowPass] = useState(false)

   const handleLogin = e => {
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;

      signIn(email, password)
         .then(() => navigate('/'))
         .catch(error => setErroMessage(error.message))
   }

   return (
      <div className="py-12">
         <div className="max-w-[85%] mx-auto">
            <div className="py-12">
               <div className="w-1/2 mx-auto shadow-lg p-16 rounded-xl">
                  <h2 className="text-3xl font-medium text-primary text-center">Login your account</h2>
                  <form onSubmit={handleLogin} className='mt-10'>
                     <div className="space-y-5">
                        <div>
                           <label className="font-medium text-primary">Email address</label>
                           <input type="email" name="email" placeholder="Enter your email address" className="w-full px-4 py-3 bg-[#F3F3F3] mt-2 rounded focus:outline-none border border-slate-200 focus:border-slate-400" />
                        </div>
                        <div className="mt-6 relative">
                           <label className="font-medium text-primary">Password</label>
                           <input type={showPass ? 'text' : 'password'} name="password" placeholder="Enter your password" className="w-full px-4 py-3 bg-[#F3F3F3] mt-2 rounded focus:outline-none border border-slate-200 focus:border-slate-400" />
                           <span onClick={() => setShowPass(!showPass)} className="cursor-pointer absolute top-12 right-3 text-[13px] font-semibold">{showPass ? 'Hide' : 'Show'}</span>
                        </div>
                        {
                           erroMessage && <p className="text-red-500 font-medium mt-3">{erroMessage}</p>
                        }
                        <button className="bg-indigo-600 py-2.5 text-white font-medium w-full rounded">Login</button>
                        <p className="text-center text-[#706F6F] font-medium">Do not have an account ? <Link className='text-indigo-600 font-semibold hover:underline' to="/register">Register</Link></p>
                        <div className="flex gap-3">
                           <button className="text-indigo-600 font-medium border border-blue-500 rounded py-1 w-full flex gap-2 items-center justify-center"><img src={GoogleIcon} className='w-4' /><span>Login with Google</span></button>
                           <button className="text-primary font-medium border border-primary rounded py-1 w-full flex gap-2 items-center justify-center"><img src={GithubIcon} className='w-4' /><span>Login with Github</span></button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;