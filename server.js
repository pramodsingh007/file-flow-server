import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import connect from './utils/db.js';
import { getAllFiles, getDownloadFile, getFile, setPassword, uploadFile } from './controller/file.js';
import { sendEmail } from './controller/email.js';
import path from 'path';




const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static('public'))
app.use(morgan())
app.use(express.json())
app.use(helmet())
app.use(cors({origin:'*'}))


app.get('/file-preview/:docId',getFile)
app.get('/get-download-file/:docId',getDownloadFile)
app.post('/get-all-files',getAllFiles)
app.post('/upload-file',uploadFile)
app.patch('/set-password',setPassword)
app.post('/send-email',sendEmail)



app.listen(PORT,()=>{
    connect().then(()=>{
        console.log(`server runing on port ${PORT}`)
    })
    .catch(err=>console.log(err))
})