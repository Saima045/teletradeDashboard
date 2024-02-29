import React from 'react'
import Sidebar from './dashboard/components/Sidebar'
import Navbar from './dashboard/components/Navbar'
import Link from 'next/link'

const Home = () => {
  return (
    <> 
        <div className='bg-[grey]'>
          
         <Link href='/dashboard'>
           <h1 className='flex justify-center items-center min-h-screen text-5xl'>Admin Dashboard</h1>
         </Link>

        </div>





    </>
  )
}

export default Home