"use server"

import { revalidatePath } from "next/cache"
//import { revalidatePath } from "next/cache"
import { Category } from "./categoryModel";
import { User } from "./userModel";
import { Product } from "./productModel";
//import { useRouter } from 'next/router';
//import { Category } from "./models"

const uploadImage = async (img) => {

    const data = new FormData();
   
    data.append('file', img);
    data.append('upload_preset', 'wg45db7u');

   
    if (img instanceof File) 
    {
      
     
      try {
      //  alert(img)
      //  setImageLoading(true)
        const response = await fetch('https://api.cloudinary.com/v1_1/dkxy59efx/image/upload', {
            method: 'POST',
            body: data
        });

     
    
      

           if (response.ok) {
           
            const responseData = await response.json();
           // alert('')
          //  console.log('Cloudinary response:', responseData);
            return responseData.secure_url; // Return the Cloudinary image URL
          } else {
            //alert('img')
            console.error('Failed to upload image to Cloudinary');
            return null;
          }

    
    } catch (error) {
        console.error('Error uploading image:', error);
    } finally {
       // setImageLoading(false);
    }

    }
     
  }
   
  

export const deleteCategory = async (formData) => {
    const { cat_id } = Object.fromEntries(formData);
    const deletedCategory = await Category.findByIdAndDelete( cat_id)
    console.log(deletedCategory)
    revalidatePath('dashboard/category3');
}

export const addCategory = async (formData) => {
    const { caption,image } = Object.fromEntries(formData);
   

    const url = await uploadImage(image);
    console.log(url)

    try {
        const createdCategory = await Category.create({
            caption, image:url
        })

        //console.log(createdCategory)
    }
        catch (error) {
            console.log(error)
        }

        // Use revalidatePath from next/navigation for navigation
        revalidatePath('dashboard/category');

        
}

export const deleteUser = async (formData) => {
   // console.log('user_id')
    const { user_id } = Object.fromEntries(formData);
   
    const deletedUser = await User.findByIdAndDelete(user_id)
    console.log(deletedUser)
    revalidatePath('dashboard/users');
}

export const deleteProduct = async (formData) => {
    // console.log('user_id')
     const { prod_id } = Object.fromEntries(formData);
    
     const deletedProd = await Product.findByIdAndDelete(prod_id)
     console.log(deletedProd)
     revalidatePath('dashboard/products');
 }