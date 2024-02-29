import React from 'react'
import { fetchUsers } from '@/app/libs/fetching'
import { deleteUser } from '@/app/libs/actions'
import Link from 'next/link'

const page = async() => {
    const users= await fetchUsers()
  //  console.log(categories)
  return (
    <> 
    <div className="container w-[90%] mx-auto rounded-md bg-[#192237] p-0">
    <div className=' grid md:grid-cols-3 gap-4 col-12  shadow-md rounded-md text-black'>
       {users?.map((item) => {
                return (
                    <div key={item?._id} className="p-3 border rounded-md bg-[#B4DD7F]">
                        <div><b>Name:</b>{item?.name}</div>
                        <div><b>Email:</b>{item?.email}</div>   
                        <div><b>Phone:</b>{item?.phone}</div>   
                        <div>
                            <form action={deleteUser}>
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
            
            {/* <table className='capitalize text-center w-full'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Delete</th>
                       
                    </tr>
                </thead>
                <tbody>
                        {users?.map((item) => {
                            return (
                                <>
                                    <tr className=''>
                                        <td className='p-5'>{item?.name}</td>
                                        <td className='p-5'>{item?.email}</td>
                                        <td className='p-5'>{item?.phone}</td>
                                        <td className='p-5'>
                                        
                                        <form action={deleteUser}>
                                                <input type="hidden" value={item?._id.toString()} name="user_id" id="" />
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
             </table>    */}
    </div>
    </>
  )
}

export default page