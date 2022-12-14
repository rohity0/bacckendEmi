const express = require('express');
const users = require('../models/Register');

const emi  = express.Router();

emi.post("/", (req, res)=>{
    let { loan, rate, months } = req.body;
     rate= rate/12/100

    let EMI= (loan * rate * ((1 + rate)**months) ) / (( (1 + rate)**months)-1 );
    // console.log(EMI)
     EMI=Math.floor(EMI)
    let totalPayment=Math.floor(EMI*months)
    let interest=Math.floor(totalPayment-loan)
    res.send({EMI,totalPayment,interest})   
}); 


module.exports = emi;
