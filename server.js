const app = require("./app.js");
const dotenv = require("dotenv");
const connectDB = require("./config/database.js");

// Environment variable configuration setup --developement
dotenv.config({path:"./config/config.env"});

// connecting to database
connectDB();

app.listen(process.env.PORT, ()=>{
    console.log(`server connected to PORT ${process.env.PORT}`);
})