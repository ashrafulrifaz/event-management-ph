import phoneImg from '../../../assets/telephone.png'
import mailImg from '../../../assets/mail.png'
import locationImg from '../../../assets/location.png'

const Contact = () => {
   return (
      <div className="mx-auto max-w-[90%] py-12">
         <div className="grid grid-cols-2 gap-5 items-center">
            <div>               
               <h2 className="font-bold text-4xl">Upcoming Events</h2>
               <p className="text-lg mt-2 font-medium">The service we can provide for you</p>
               <ul className='mt-5 space-y-4'>
                  <li className='flex gap-3 items-center'>
                     <div className='w-7 p-1.5 rounded-xl bg-indigo-600'>
                        <img src={phoneImg} className='w-6 h-auto ' alt="" />
                     </div>
                     <span className='font-sans font-medium'>+880 01643876985</span>
                  </li>
                  <li className='flex gap-3 items-center'>
                     <div className='w-7 p-1.5 rounded-xl bg-indigo-600'>
                        <img src={mailImg} className='w-6 h-auto ' alt="" />
                     </div>
                     <span className='font-sans font-medium'>developerashrafulislamrifaz@gmail.com</span>
                  </li>
                  <li className='flex gap-3 items-center'>
                     <div className='w-7 p-1.5 rounded-xl bg-indigo-600'>
                        <img src={locationImg} className='w-6 h-auto ' alt="" />
                     </div>
                     <span className='font-sans font-medium'>NSTU Road, Sonapur, Noakhali, Bangladesh</span>
                  </li>
               </ul>
            </div>
            <div>
               <form className='bg-slate-100 py-8 px-10 rounded-xl space-y-5'>
                  <div>
                     <input type="text" placeholder='Enter your name' className='py-2 px-3 rounded-lg w-full focus:outline-none border border-slate-200 focus:border-slate-400' />
                  </div>
                  <div>
                     <input type="email" placeholder='Enter your email' className='py-2 px-3 rounded-lg w-full focus:outline-none border border-slate-200 focus:border-slate-400' />
                  </div>
                  <div>
                     <input type="date" className='py-2 px-3 rounded-lg w-full focus:outline-none border border-slate-200' />
                  </div>
                  <div>
                     <textarea name="" placeholder='Details of your event' className='py-2 px-3 rounded-lg w-full focus:outline-none border border-slate-200 focus:border-slate-400' rows="4"></textarea>
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