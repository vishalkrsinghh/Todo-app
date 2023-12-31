const express= require("express");
const path= require("path");
require("./config/envConfig");
require("./config/mongooseConfig");
let PORT= process.env.PORT || 8000;

let app= express();
// setting view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"view"));
// for handle static files.
app.use(express.static(path.join(__dirname,"assets")));
app.use(express.urlencoded());
app.use("/", require("./routes/homeRoute"))
app.listen(PORT,()=>{
    console.log("sucessfully served");
})