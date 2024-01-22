const express =require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose= require("mongoose");
const app=express();


MONGO_URL=process.env.MONGO_URL;
PORT=process.env.PORT;


//connect our db
mongoose.connect(MONGO_URL).then(()=>{

    console.log('App Connect to the data base');

    app.listen(PORT,()=>{

        console.log(`App is listening to port:${PORT}`)
    
    })}).catch((error)=>
{
console.log(error);
}
);

