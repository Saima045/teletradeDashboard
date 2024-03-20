import { Product } from "./productModel";
import { User } from "./userModel";

const { connectDB } = require("./connection")
const { Category } = require("./categoryModel")

export const fetchData = async () => {
  //  const pattern = new RegExp(q, 'i')
  //   await connectDB()
  //  const categories = await Category.find();
  // // const categories = await Category.find().lean();
  //   return categories



   
      try {
          // Connect to the database
          await connectDB();
  
          // Fetch categories data from the database
          const categories = await Category.find();
  
          // Set Cache-Control header to prevent client-side caching
          const headers = {
              'Cache-Control': 'no-store', // No caching allowed
          };
  
          // Return categories data along with headers
          return { categories, headers };
      } catch (error) {
          // Handle errors if any
          throw new Error("Failed to fetch categories: " + error.message);
      }

}

export const fetchUsers = async () => {
  //  const pattern = new RegExp(q, 'i')
    connectDB()
    const users = await User.find();
    return users
}

export const fetchProducts = async () => {
  //  const pattern = new RegExp(q, 'i')
    connectDB()
   // const products = await Product.find();

    const products = await Product.find() 
    .populate('user')
    .exec()
    return products
}