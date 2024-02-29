import React from 'react'
import { FaBell } from "react-icons/fa";
import { CiGlobe, CiChat1 } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ toggleSidebar })=> {
  return (
    <>
    {/* <div className='w-[70%] self-start'>
       Admin Dashboard
     </div> */}

     <div className="bg-[#192237] rounded-md flex px-5 sm:w-full h-10 justify-between py-10  items-center">
               
             
               <div className="">
                      <img  className='w-14 h-16' src="https://i.pinimg.com/originals/0b/92/c1/0b92c1ba5ae239c314ba2ec1dab936ec.png" alt="" />
                 </div>
                 <div className="logo md:block sm:hidden "> {/* Hide for small and extra-small screens */}
                      <h1 className="text-center text-2xl">
                          Dashboard
                      </h1>
                 </div>
                 <GiHamburgerMenu onClick={toggleSidebar} size={25} className="toggle-button lg:hidden md:hidden sm:block"/>
                 {/* <button className="toggle-button lg:hidden md:hidden sm:block"> {/* Display for small and extra-small screens */}
                     {/* Toggle
                 </button>  */}

                 <div className='hidden md:block lg:block sm:hidden'>
                 <form action="" className=' flex items-center gap-4 '>
                    <input type="search" placeholder='Search...' className='bg-[#2E374A] p-2 rounded-md outline-none text-gray-400 focus:shadow-xl ' name="" id="" />
                    <FaBell />
                    <CiGlobe />
                    <CiChat1 />
                </form>

                 </div>
    
              

            </div>
            <div className='bg-[#192237] mx-auto py-3  sm:block md:hidden lg:hidden'>
               <form action="" className=' flex items-center gap-4 '>
                    <input type="search" placeholder='Search...' className='bg-[#2E374A] p-2 rounded-md outline-none text-gray-400 focus:shadow-xl ' name="" id="" />
                    <FaBell />
                    <CiGlobe />
                    <CiChat1 />
                </form>

            </div>
    </>
  )
}

export default Navbar