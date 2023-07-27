
let todoCollection=require("../model/todoSchema_Model");
// save the data in mongoDb
module.exports.saveData= async (req,res)=>{
    try{
        // creating a new document all time whenever we click on add task button.
        let data= await todoCollection.create(req.body);
        // console.log(req.body, " ", " ln7");
        // console.log(data, " ", " ln8");
        res.redirect("/");
    }
    catch(err){
        console.log(`Error ${err}`);
    }
}