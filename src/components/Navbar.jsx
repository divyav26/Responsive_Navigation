import React, { useState } from 'react'
import logo from '../img/logo.jpg'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState(false)

    
  return (
    <>
    <section className='lg:hidden md:hidden'>
        <div className='header-mob text-center bg-green-400 p-2 text-white font-bold'>
            <div className='header flex justify-center items-center gap-1'>
                <i className='bx bxl-whatsapp text-2xl'></i>
                <h3 className='text-xl'>GUIDE ME</h3>
            </div>
        </div>
    </section>

    <section className='p-3 text-white bg-blue-950'>
        <div className='nav-header flex justify-around items-center'>
            <div className='flex justify-between items-center gap-20 lg:flex lg:justify-start lg:items-center lg:gap-2'>
                <div className='lg:hidden md:hidden'>
                    <i class='bx bx-menu text-3xl' onClick={()=>setOpen(!open)}></i>  
                </div>

                <div className='img w-16'>
                    <img src={logo} alt='logo' className='min-w-[100px] lg:min-w-[70px] max-h-[40px]'/>
               </div>

                <div className='lg:hidden bg-orange-500 rounded-md'>
                    <i className='bx bxs-phone-call text-xl p-1 animate-waving-hand'></i>
                </div>

               <div className='hidden lg:flex justify-center items-center'>
                    <span className='text-3xl'>|</span>
               </div>
               
               <div className='hidden lg:flex justify-center items-center gap-1'>
                    <button className='px-4 py-1 gap-1 font-bold text-white border border-white-500 rounded-lg flex justify-center items-center'>
                        <i className='bx bx-table'></i>
                        <p>Course Menu</p>
                    </button>
                </div>

                <div className='hidden lg:flex items-center'>
                     <input type='text' placeholder='Search your course here !!' className='p-1 rounded-sm min-w-[350px] outline-none' onClick={()=>setSearch(!search)}/>
                    <i className='bx bx-search bg-orange-500 p-2'></i>
                </div>
            </div>

            <div className='hidden All-course lg:flex items-center gap-4 text-center'>
                <p>AllCourses <span className='text-xl'>|</span> Corporate </p>
                <i className='bx bxs-user-circle text-2xl'></i>
            </div>
        </div>
    </section>

    {
        open && (
            <div className='lg:hidden w-full p-3 h-[180px] bg-black rounded-sm'>
                <div className='flex justify-center items-center bg-black mt-2'>
                        <button className='px-4 py-1 gap-1 font-bold text-white border border-white-500 rounded-lg flex justify-center items-center'>
                            <i className='bx bx-table'></i>
                            <p>Course Menu</p>
                        </button>
                </div>
                <div className='flex justify-center items-center mt-2'>
                        <input placeholder='Search your course here !!' className='p-1 rounded-sm min-w-[300px] outline-none' onClick={()=>setSearch(!search)}/>
                        <i className='bx bx-search bg-orange-500 p-2'></i>
                </div>
                <div className='All-course flex justify-center items-center gap-4 text-center text-white mt-2'>
                    <p>AllCourses <span className='text-xl'>|</span> Corporate </p>
                    <i className='bx bxs-user-circle text-2xl'></i>
                </div>
            </div>
            )
    }

    {
        search && (
  
            <div className="fixed inset-0 m-12 flex justify-center items-stat bg-opacity-75 z-50">
          <div className="bg-white rounded shadow-md w-full h-[50vh] my-0">
            <div className="flex justify-end bg-blue-950 h-[50px] w-full">
              <button
                onClick={()=>setSearch(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                &times;
              </button>
              
            </div>
           <div className='top-header'>

           </div>
          </div>
        </div>
 
        )
    }

   

    <section>
        <div className='hidden lg:flex justify-center gap-4 pt-2'>
        <div className='flex justify-center items-center'>
                <i class='bx bx-rfid'></i>
                <p>Fee Deposit</p>
            </div>

            <div className='flex justify-center items-center'>
            <i class='bx bx-alarm-snooze'></i>
                <p>Request Zone</p>
            </div>

            <div className='flex justify-center items-center'>
            <i class='bx bxs-star-half'></i>
                <p>Reviews</p>
            </div>

            <div className='flex justify-center items-center'>
            <i class='bx bxl-blogger' ></i>
                <p>Blogs</p>
            </div>

            <div className='flex justify-center items-center'>
            <i class='bx bxs-devices'></i>
                <p>Press release</p>
            </div>

            <div className='flex justify-center items-center'>
            <i class='bx bx-edit'></i>
                <p>Training Certificate</p>
            </div>

            <div className='flex justify-center items-center'>
            <i class='bx bx-location-plus'></i>
                <p>Contact Us</p>
            </div>
        </div> 
       
    </section>
    </>
  )
}

export default Navbar
