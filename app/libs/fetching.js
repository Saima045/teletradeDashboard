import { Product } from "./productModel";
import { User } from "./userModel";

const { connectDB } = require("./connection")
const { Category } = require("./categoryModel")

export const fetchData = async () => {
  //  const pattern = new RegExp(q, 'i')
    await connectDB()
   // const categories = await Category.find();
   const categories = await Category.find().lean();
    return categories
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