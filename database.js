const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
dotenv.config();


exports.connectDB = async() =>{
    try{
       await mongoose.connect(process.env.DB_URL);
       console.log("Connected to the database");
    }catch(err){
        console.log("Fail to connect to Database");
        process.exit(1);
    }
}