const app = require("./app.js");
const dotenv = require("dotenv");

// Environment variable configuration setup --developement
dotenv.config({path:"./config/config.env"});

app.listen(process.env.PORT, ()=>{
    console.log(`server connected to PORT ${process.env.PORT}`);
})