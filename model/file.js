import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    fileName:{
        type:String,
        required:true,
    },
    fileSize:{
        type:String,
        required:true
    },
    fileType:{
        type:String,
        required:true
    },
    fileURL:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    shortURL:{
        type:String,
        required:true
    }

})

const File = mongoose.model('files',fileSchema)

export default File