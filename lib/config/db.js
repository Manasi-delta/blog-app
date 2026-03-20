import mongoose from "mongoose";
export const Connectdb=async ()=>{
    await mongoose.connect('mongodb+srv://Manasi:tuku2005%23@cluster0.qnz4h9a.mongodb.net/blog-app');
    console.log("db connected");
}