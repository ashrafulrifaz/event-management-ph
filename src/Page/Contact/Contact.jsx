import ContactInfoImage from '../../assets/contact-info.jpg'
import FormImage from '../../assets/form.jpg'
import phoneImg from '../../assets/telephone.png'
import mailImg from '../../assets/mail.png'
import locationImg from '../../assets/location.png'
import { toast } from 'react-toastify'
import { useState } from 'react'

const Contact = () => {
   const [isNameHave, setIsNameHave] = useState('')
   const [isEmailHave, setIsEmailHave] = useState('')
   const [isDateHave, setIsDateHave] = useState('')
   const [isMessageHave, setIsMessageHave] = useState('')

   const handleContactForm = e => {
      e.preventDefault()
      const name = e.target.name.value
      const email = e.target.email.value
      const date = e.target.date.value
      const message = e.target.message.value

      if(name === ''){
         setIsNameHave('please! enter your name')
         return
      } else {
         setIsNameHave('')
      }

      if(email !== ''){
         if(/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/.test(email)){
            setIsEmailHave('')
         } else {
            setIsEmailHave('invalid email')
            return
         }
      } else {
         setIsEmailHave('please! enter your email')
         return
      }

      if(date === ''){
         setIsDateHave('please! place your event date')
         return
      } else {
         setIsDateHave('')
      }

      if(message === ''){
         setIsMessageHave('please! enter message')
         return
      } else {
         setIsMessageHave('')
      }
      
      toast("Event Booked Successfully")
   }

   return (
      <div className='max-w-[90%] mx-auto py-10'>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div className='order-last lg:order-none'>               
               <h2 className="font-bold text-4xl">Upcoming Events</h2>
               <p className="text-lg mt-2 font-medium">The service we can provide for you</p>
               <ul className='mt-5 space-y-4'>
                  <li className='flex gap-3 items-center'>
                     <div className='w-7 p-1.5 rounded-xl bg-indigo-600'>
                        <img src={phoneImg} className='w-6 h-auto ' alt="" />
                     </div>
                     <p className='font-sans font-medium'><span className='font-semibold text-[17px]'>Phone:</span> +880 01643876985</p>
                  </li>
                  <li className='flex gap-3 items-center'>
                     <div className='w-7 p-1.5 rounded-xl bg-indigo-600'>
                        <img src={mailImg} className='w-6 h-auto ' alt="" />
                     </div>
                     <p className='font-sans font-medium'><span className='font-semibold text-[17px]'>E-mail:</span> ashrafulislamrifaz@gmail.com</p>
                  </li>
                  <li className='flex gap-3 items-center'>
                     <div className='w-7 p-1.5 rounded-xl bg-indigo-600'>
                        <img src={locationImg} className='w-6 h-auto ' alt="" />
                     </div>
                     <p className='font-sans font-medium'><span className='font-semibold text-[17px]'>Address:</span> NSTU Road, Sonapur, Noakhali, Bangladesh</p>
                  </li>
               </ul>
            </div>
            <div>
               <img src={ContactInfoImage} className='w-full md:w-3/4 lg:w-full mx-auto' alt="" />
            </div>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div>
               <img src={FormImage} className='w-full md:w-3/4 lg:w-full mx-auto' alt="" />
            </div>
            <div>
               <form onSubmit={handleContactForm} className='bg-slate-100 py-4 md:py-8 px-5 md:px-10 rounded-xl space-y-5'>
                  <div>
                     <input name='name' type="text" placeholder='Enter your name' className='py-2 px-3 rounded-lg w-full focus:outline-none border border-slate-200 focus:border-slate-400' />
                     {
                        isNameHave && <p className="text-red-500 font-medium mt-3">{isNameHave}</p>
                     }
                  </div>
                  <div>
                     <input name='email' type="email" placeholder='Enter your email' className='py-2 px-3 rounded-lg w-full focus:outline-none border border-slate-200 focus:border-slate-400' />
                     {
                        isEmailHave && <p className="text-red-500 font-medium mt-3">{isEmailHave}</p>
                     }
                  </div>
                  <div>
                     <input name='date' type="date" className='py-2 px-3 rounded-lg w-full focus:outline-none border border-slate-200' />
                     {
                        isDateHave && <p className="text-red-500 font-medium mt-3">{isDateHave}</p>
                     }
                  </div>
                  <div>
                     <textarea name="message" placeholder='Details of your event' className='py-2 px-3 rounded-lg w-full focus:outline-none border border-slate-200 focus:border-slate-400' rows="4"></textarea>
                     {
                        isMessageHave && <p className="text-red-500 font-medium mt-3">{isMessageHave}</p>
                     }
                  </div>
                  <div>
                     <button className='py-2.5 text- rounded-lg w-full bg-indigo-600 text-white font-medium'>Book Your Event</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Contact;