import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();
export async function connect() {
  try{
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on('connected',()=>{
      console.log('Mpngodb connected successfully')
    })
    connection.on('error',(err)=>{
      console.log('Mongodb connection error:'+err);
      process.exit();
    })
  }catch(error){
    console.log('Something went wrong!');
    console.log('error');
  }
}