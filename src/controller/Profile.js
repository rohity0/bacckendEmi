const express = require('express');
const users = require('../models/Register');

const profile  = express.Router();


profile.get("/", async(req, res)=>{
       const  {token} = req.headers;
         try{
            const [email, id , name] = token.split(":")
            let user = await users.findById(id);
               
             res.send(user)
           
         
         }catch(e){
            console.log(e.message)
         }
})


module.exports = profile