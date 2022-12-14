const mongoose  = require("mongoose");

const connect  = ()=>{
      return mongoose.connect(`mongodb+srv://rohity0:rohity0@cluster0.fl1yasj.mongodb.net/Emi`).catch((e)=>{
        console.log(e.message)
      })
}

module.exports = connect;
