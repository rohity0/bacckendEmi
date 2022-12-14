const express = require("express");
const connect = require("../config/db");
const login = require("./controller/loginUser");
const user = require("./controller/userRegister");
const cors  = require("cors");
const profile = require("./controller/Profile");
const emi = require("./controller/emi");
const PORT = process.env.PORT || 8000

const app  = express();
app.use(cors());
app.use(express.json());

app.use("/register", user);
app.use("/login", login);
app.use("/profile", profile);
app.use("/emi", emi);

app.listen(PORT, async()=>{
     await connect();
     console.log("done 800")
})

