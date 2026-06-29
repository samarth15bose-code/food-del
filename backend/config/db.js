import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://samarth15bose_db_user:99edy6bINOYAgJ2Y@cluster0.qhbzoys.mongodb.net/food-del').then(()=>{
        console.log("DB connected");
    })
}