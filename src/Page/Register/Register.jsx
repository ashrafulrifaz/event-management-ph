import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from '../../assets/google.png'
import GithubIcon from '../../assets/github.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
   const {createUser, googleLogin} = useContext(AuthContext)
   const navigate = useNavigate()
   const [isNameHave, setIsNameHave] = useState('')
   const [isImageHave, setIsImageHave] = useState('')
   const [isEmailHave, setIsEmailHave] = useState('')
   const [isPassHave, setIsPassHave] = useState('')
   const [showPass, setShowPass] = useState(false)
   const [errorMessage, setErrorMessage] = useState('')

   const handleRegister = e => {
      e.preventDefault()
      const name = e.target.name.value
      const photo = e.target.photo.value
      const email = e.target.email.value
      const password = e.target.password.value

      if(name === ''){
         setIsNameHave('please! enter your name')
      } else {
         setIsNameHave('')
      }

      if(photo !== ''){
         if(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(photo)){
            setIsImageHave('')
         } else {
            setIsImageHave('invalid photo url')
         }
      } else {
         setIsImageHave('please! enter your photo url')
      }

      if(email !== ''){
         if(/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/.test(email)){
            setIsEmailHave('')
         } else {
            setIsEmailHave('invalid email')
         }
      } else {
         setIsEmailHave('please! enter your email')
      }

      if(password !== ''){
         if(password.length >= 6){
            if(/^(?=.*[A-Z])(?=.*\d).+/.test(password)){
               setIsPassHave('')
               createUser(email, password)
                  .then(() => navigate('/login'))
                  .catch(error => setErrorMessage(error.message))
            } else {
               setIsPassHave('invalid password')
            }
         } else {
            setIsPassHave('password show have at least 6 character')
         }         
      } else {
         setIsPassHave('please! enter your password')
      }
   }

   const handleGoogleRegister = () => {
      const googleProvider = new GoogleAuthProvider()
      googleLogin(googleProvider)
         .then(() => navigate('/'))
   }

   return (
      <div className="py-12">
         <div className="max-w-[85%] mx-auto">
            <div className="py-12">
               <div className="w-1/2 mx-auto shadow-lg p-16 rounded-xl">
                  <h2 className="text-3xl font-medium text-primary text-center">Create an account</h2>
                  <form onSubmit={handleRegister} className='mt-10'>
                     <div className="space-y-5">
                        <div>
                           <label className="font-medium text-primary">Name</label>
                           <input type="text" name="name" placeholder="Enter your name" className="w-full px-4 py-3 bg-[#F3F3F3] mt-2 rounded focus:outline-none border border-slate-200 focus:border-slate-400" />
                           {
                              isNameHave && <p className="text-red-500 font-medium mt-3">{isNameHave}</p>
                           }
                        </div>
                        <div className="mt-6">
                           <label className="font-medium text-primary">Photo</label>
                           <input type="text" name="photo" placeholder="Enter your photo URL" className="w-full px-4 py-3 bg-[#F3F3F3] mt-2 rounded focus:outline-none border border-slate-200 focus:border-slate-400" />
                           {
                              isImageHave && <p className="text-red-500 font-medium mt-3">{isImageHave}</p>
                           }
                        </div>
                        <div>
                           <label className="font-medium text-primary">Email address</label>
                           <input type="email" name="email" placeholder="Enter your email address" className="w-full px-4 py-3 bg-[#F3F3F3] mt-2 rounded focus:outline-none border border-slate-200 focus:border-slate-400" />
                           {
                              isEmailHave && <p className="text-red-500 font-medium mt-3">{isEmailHave}</p>
                           }
                        </div>
                        <div className="mt-6 relative">
                           <label className="font-medium text-primary">Password</label>
                           <input type={showPass ? 'text' : 'password'} name="password" placeholder="Enter your password" className="w-full px-4 py-3 bg-[#F3F3F3] mt-2 rounded focus:outline-none border border-slate-200 focus:border-slate-400" />
                           <span onClick={() => setShowPass(!showPass)} className="cursor-pointer absolute top-12 right-3 text-[13px] font-semibold">{showPass ? 'Hide' : 'Show'}</span>
                           {
                              isPassHave && <p className="text-red-500 font-medium mt-3">{isPassHave}</p>
                           }
                           {
                              errorMessage && <p className="text-red-500 font-medium mt-3">{errorMessage}</p>
                           }
                        </div>
                        <button className="bg-indigo-600 py-2.5 text-white font-medium w-full rounded">Register</button>
                        <p className="text-center text-[#706F6F] font-medium">Already have an account ? <Link className='text-indigo-600 font-semibold hover:underline' to="/login">Login</Link></p>
                        <div className="flex gap-3">
                           <button onClick={handleGoogleRegister} className="text-indigo-600 font-medium border border-blue-500 rounded py-1 w-full flex gap-2 items-center justify-center"><img src={GoogleIcon} className='w-4' /><span>Register with Google</span></button>
                           <button className="text-primary font-medium border border-primary rounded py-1 w-full flex gap-2 items-center justify-center"><img src={GithubIcon} className='w-4' /><span>Register with Github</span></button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;