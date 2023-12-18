import exp from "constants"
import File from "../model/file.js"

export const uploadFile = async(req,res)=>{
    const body = req.body
    await File.create({
     fileName:body.fileName,
     fileSize:body.fileSize,
     fileType:body.fileType,
     fileURL:body.fileURL,
     userName:body.userName,
     userEmail:body.userEmail,
     shortURL:body.shortURL
    })
    res.json({res:'ok'})
}

export const getFile = async(req,res)=>{
    const docId = req.params.docId
    const foundFile = await File.findOne({fileName:docId})
    res.status(200).json(foundFile)
}


export const setPassword = (req,res)=>{
    const fileName = req.body.fileName
    const password = req.body.password
    console.log(password)

    File.updateOne({fileName:fileName},{$set:{password:password}})
    .then(()=>{
        res.status(200).json({res:'password set succesfull'})
    })
    .catch(err=>console.log(err))
}


export const getAllFiles = async(req,res)=>{
    const userEmail  = req.body.userEmail
    const allFiles = await File.find({userEmail:userEmail})
    console.log(allFiles)
    res.status(200).json(allFiles)
} 

export const getDownloadFile  = async(req,res)=>{
        const docId = req.params.docId
        const file = await File.findOne({fileName:docId})
        res.status(200).json(file)
}