import Link from 'next/link'
import { BiCategory } from 'react-icons/bi';
import { FaUser, FaUsersSlash } from 'react-icons/fa'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import { data } from '../dashboard/users/data'
// import Items from '../dashboard/users/Items'


const Sidebar = ({ isSidebarOpen,toggleSidebar }) => {
    const handleClick =()=>{
        toggleSidebar()
    }

    return (
      <>
      <div className={`min-h-screen w-full md:min-h-screen md:w-[30%] lg:w-[20%] sm:w-full flex flex-col bg-[#192237] py-10 px-4 ${isSidebarOpen ? '' : 'hidden md:block lg:block sm:w-0'}`}>
    <div className="my-3">
        <Link href='/dashboard/category' onClick={handleClick}>
            <div className="hover:bg-red-400 p-2 rounded-md flex items-center gap-1">
                <BiCategory size={20} />
                <h1 className='text-2xl'>Categories</h1>
            </div>
        </Link>
    </div>

    <div className="my-3">
        <Link href='/dashboard/users' onClick={handleClick}>
            <div className="hover:bg-red-400 p-2 rounded-md flex items-center gap-1">
                <FaUsersSlash size={20} />
                <h1 className='text-2xl'>Users</h1>
            </div>
        </Link>
    </div>

    <div className="my-3">
        <Link href='/dashboard/products' onClick={handleClick}>
            <div className="hover:bg-red-400 p-2 rounded-md flex items-center gap-1">
                <MdOutlineProductionQuantityLimits size={20} />
                <h1 className='text-2xl'>Products</h1>
            </div>
        </Link>
    </div>
</div>

 

       
                   </>
    );
  };

export default Sidebar