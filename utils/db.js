import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const connect = async()=>{
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.bhci9is.mongodb.net/FileFlow`)
}

export default connect