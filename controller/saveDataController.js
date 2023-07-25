
let todoCollection=require("../model/todoSchema_Model");
module.exports.saveData= async (req,res)=>{
    try{
        let data= await todoCollection.create(req.body);
        // console.log(req.body, " ", " ln7");
        // console.log(data, " ", " ln8");
        res.redirect("/");
    }
    catch(err){
        console.log(`Error ${err}`);
    }
}