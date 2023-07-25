let mongoose= require("mongoose");
// require("./envConfig");
let URI= process.env.MONGOURL;
console.log(URI);
mongoose.connect(URI)
.then(()=>{
    console.log("connected Sucessfulll");
})
.catch((err)=>{
    console.log(`Error  ${err}`);
})