console.log(1)
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import productRouter from './Routers/products'


const app = express();

//middleware
app.use(morgan('tiny'));
app.use(express.json())
app.use(cors())

//router
app.use("/api", productRouter)


// connect db 
mongoose.connect("mongodb://localhost:27017/AssNextjs")
    .then(() => {
        console.log("Connect db successfuly")
    })
    .catch(error => console.log(error))
const PORT = 8000; .0
app.listen(PORT, () => {
    console.log(2)
})