//import React from 'react'
"use client";
// Import useClient at the top of your file
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { Row, Col, Bu } from 'react-bootstrap'; // Import Bootstrap components if you are using them
import { BiImages } from 'react-icons/bi';
import CButton from '../../components/CButton';
import { addCategory } from '@/app/libs/actions';
//import { Button } from 'react-bootstrap';
//import { CloudinaryUploadWidget } from 'react-cloudinary-upload-widget';

const page = () => {
   

  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  //  const [imageLoading, setImageLoading] = useState(false)
  //  imageUrl=''
 

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      console.log(file);
      const reader = new FileReader(file);
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImage(file);
      
      }
    }
  }
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('image', image);

    // Pass formData to the onSubmit function
   // onSubmit(formData);
    addCategory(formData)
  };


  return (
    <>
    <div className="container w-[90%] mx-auto p-4 bg-[#192237]">
      <form onSubmit={handleSubmit} >
                <div className="flex gap-3 items-center ">
                <label htmlFor="caption" className="text-gray-400 w-1/12">Caption</label>
                    <input
                      name="caption"
                      id="caption"
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      className="flex-1 bg-[#151C2D] p-4 col-span-6 my-2 outline-none text-gray-400"
                      type="text"
                      placeholder=""
                    />
                </div>

                <div className='flex items-center'>
                     <img
                        className='object-cover w-1/2 h-auto'
                        src={imagePreview ? imagePreview : ''}
                        alt=""
                      />
                    <div className="flex items-center  relative">
                          <input
                            type="file"
                            onChange={handleImageChange}
                            className='absolute opacity-0 cursor-pointer'
                            name=""
                            id=""
                          />
                          <BiImages className='cursor-pointer' color='#41BE5E' size={50} />
                    </div>
     
            </div>
                
                   <button type="submit" className=''>Add </button>
                </form> 
    </div>
    </>
  )
}

export default page