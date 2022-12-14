const express = require('express');
const users = require('../models/Register');

const login  = express.Router();

login.post("/",  async (req, res)=>{
           try{
             let {email, password} =  req.body;
               let data = Date();
               
             let user =  await users.findOne({email: email , password: password});
                         res.send({token : `${user.email}:${user._id}:${user.name}`})
           }catch(e){
            console.log(e.message)
               res.send(e.message)
           }
})

module.exports = login
