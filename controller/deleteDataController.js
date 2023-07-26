
let todoCollection=require("../model/todoSchema_Model");
module.exports.deleteData= async (req,res)=>{
    try{
        let id= req.params.id;
        // console.log(id," ", " =ID");
        await todoCollection.findByIdAndDelete(id);
        res.redirect("/");
    }
    catch(err){
        console.log(`ERROR= ${err}`);
    }
}