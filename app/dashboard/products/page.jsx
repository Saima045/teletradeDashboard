import React from 'react'
import { fetchProducts } from '@/app/libs/fetching'
import { deleteProduct, deleteUser } from '@/app/libs/actions'
import Link from 'next/link'

const page = async() => {
    const products= await fetchProducts()
  //  console.log(categories)
  return (
    <> 
     <div className="container w-[90%] mx-auto rounded-md bg-[#192237] p-0">
        <div className=' grid md:grid-cols-3 gap-4 col-12  shadow-md rounded-md text-black'>
        {products?.map((item) => {
                    return (
                        <div  className="p-3 border rounded-md bg-[#B4DD7F]">
                            <div className='text-black'><h1><b>Title:</b>{item?.title}</h1></div>
                            <div><b>Category:</b>{item?.category}</div>   
                            <div><b>Owner:</b>{item?.user?.name}</div>   
                            <div>
                                <form action={deleteProduct}>
                                    <input type="hidden" value={item?._id.toString()} name="user_id" id="" />
                                    <button className='bg-blue-500 px-4 py-2 text-white rounded-md mx-3'>
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </div>
                    );
            })}
        
                                        
                                            

        </div> 
    {/* <div className="container w-[90%] mx-auto rounded-md bg-[#192237] p-3">
            
            <table className='capitalize text-center w-full'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Owner</th>
                        <th>Delete</th>
                       
                    </tr>
                </thead>
                <tbody>
                        {products?.map((item) => {
                            return (
                                <>
                                    <tr className=''>
                                        <td className='p-5'>{item?.title}</td>
                                        <td className='p-5'>{item?.category}</td>
                                        <td className='p-5'>{item?.user?.name}</td>
                                        <td className='p-5'>
                                        
                                        <form action={deleteProduct}>
                                                <input type="hidden" value={item?._id.toString()} name="prod_id" id="" />
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
    </div> */}
    </div>
    </>
  )
}

export default page