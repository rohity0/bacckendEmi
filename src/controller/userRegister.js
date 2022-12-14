const express = require("express");
const users = require("../models/Register");

const user= express.Router();
 
user.post("/", async(req, res)=>{
        try{
             const {email, password, name} = req.body;
             let newUser = new users({email, password, name});
                await newUser.save();
                 res.send("User Registered")

        }catch(e){
            console.log(e.message)
        }
})
  



module.exports = user