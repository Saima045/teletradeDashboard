
//"use client";

import React from 'react'
import { fetchData } from '@/app/libs/fetching'
import { deleteCategory } from '@/app/libs/actions'
import Link from 'next/link'

// const page = () => {
//     const [categories, setCategories] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const categoriesData = await fetchData();
//                 setCategories(categoriesData);
//             } catch (error) {
//                 console.error('Error fetching categories:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCategories();
//     }, []); // Empty dependency array ensures that this effect runs only once on component mount

//     return (
//         <>
//             <div className="rounded-md container w-[100%] mx-auto bg-[#192237] pb-3">
//                 {/* Add New Link */}
//                 <div className='text-end mb-3 pe-10'>
//                     <Link href='/dashboard/category/add-category' className='bg-blue-500 p-2 px-4 rounded-md'>
//                         Add New
//                     </Link>
//                 </div>

//                 {/* Table for Categories */}
//                 <table className='capitalize text-center md:w-[100%] md:table w-0 hidden'>
//                     <thead>
//                         <tr>
//                             <th>Caption</th>
//                             <th>Image</th>
//                             <th>Update</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {loading ? (
//                             <tr>
//                                 <td colSpan="4">Loading...</td>
//                             </tr>
//                         ) : categories.map((item) => (
//                             <tr key={item._id}>
//                                 <td className='p-5'>{item.caption}</td>
//                                 <td className='p-5 flex justify-center items-center'>
//                                     <img className='w-20 h-20 rounded-full' src={item.image} alt="" />
//                                 </td>
//                                 <td className='p-5'>
//                                     <button className='bg-blue-500 px-4 py-2 text-white rounded-md mx-3'>
//                                         Update
//                                     </button>
//                                 </td>
//                                 <td className='p-5'>
//                                     <form onSubmit={deleteCategory}>
//                                         <input type="hidden" value={item._id.toString()} name="cat_id" id="" />
//                                         <button type="submit" className='bg-blue-500 px-4 py-2 text-white rounded-md mx-3'>
//                                             Delete
//                                         </button>
//                                     </form>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>

//                 {/* Mobile View for Categories */}
//                 <div className='md:hidden w-100'>
//                     {loading ? (
//                         <div>Loading...</div>
//                     ) : categories.map((item) => (
//                         <div key={item._id} className="bg-white shadow-md rounded-md p-6 m-4">
//                             <h1 className='text-black text-center text-3xl'>{item.caption}</h1>
//                             <div className='text-center mx-auto'>
//                                 <img className='mx-auto w-[70%] h-20' src={item.image} alt="" />
//                             </div>
//                             <div className='flex justify-center mt-2'>
//                                 <button className='bg-blue-500 px-4 py-2 text-white rounded-md mx-3'>
//                                     Update
//                                 </button>
//                                 <form onSubmit={deleteCategory}>
//                                     <input type="hidden" value={item._id.toString()} name="cat_id" />
//                                     <button type="submit" className='bg-blue-500 px-4 py-2 text-white rounded-md mx-3'>
//                                         Delete
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

const page = async() => {
   // const categories= await fetchData()
   const { data: categories } = await fetchData();
  //  console.log(categories)
  return (
    <> 
    <div className="rounded-md container w-[100%] mx-auto bg-[#192237] pb-3">
             <div className='text-end mb-3 pe-10'>
                  <Link href='/dashboard/category/add-category' className='bg-blue-500 p-2 px-4 rounded-md'>
                    Add  New
                </Link>

             </div>
                
            <table className='capitalize text-center   md:w-[100%] md:table  w-0 hidden'>
                <thead>
                    <tr>
                        <th>Caption</th>
                        <th>Image</th>
                        <th>Update</th>
                        <th>Delete</th>
                       
                    </tr>
                </thead>
                <tbody>
                        {categories?.map((item) => {
                            return (
                                <>
                                    <tr className=''>
                                        <td className='p-5'>{item?.caption}</td>
                                        <td className='p-5 flex justify-center items-center'>
                                                    <img className='w-20 h-20 rounded-full' src={item?.image} alt="" />
                                                </td>
                                        <td className='p-5'> 
                                                <button className='bg-blue-500 px-4 py-2 text-white rounded-md mx-3'>
                                                Update
                                            </button>
                                        </td>
                                        <td className='p-5'>
                                        <form action={deleteCategory}>
                                                <input type="hidden" value={item?._id.toString()} name="cat_id" id="" />
                                                <button className='bg-blue-500 px-4 py-2 text-white rounded-md mx-3'>
                                                  Delete
                                                </button>
                                            </form>
                                        </td>
                                    
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
             </table>   
             <div className='md:hidden   w-100 '>
             
                        {categories?.map((item) => {
                            return (
                                <>
                                    <div className="bg-white shadow-md rounded-md p-6 m-4">
                                        {/* Card content goes here */}
                                        <h1 className='text-black text-center text-3xl'>{item?.caption}</h1>
                                        <div className='text-center mx-auto'>
                                             <img className='mx-auto w-[70%] h-20 ' src={item?.image} alt="" />
                                        </div>
                                        <div className='flex justify-center mt-2'>
                                        <button className='bg-blue-500 px-4 py-2 text-white rounded-md mx-3'>
                                                Update
                                        </button>
                                        
                                       
                                        <form action={deleteCategory}>
                                                <input type="hidden" value={item?._id.toString()} name="cat_id" id="" />
                                                <button className='bg-blue-500 px-4 py-2 text-white rounded-md mx-3'>
                                                  Delete
                                                </button>
                                            </form>

                                        </div>
                                       
                                    </div>
                                       
                                       
                                </>
                            )
                        })}
                    
             </div>
    </div>
    </>
  )
}

export default page