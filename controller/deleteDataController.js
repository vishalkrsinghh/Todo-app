
let todoCollection=require("../model/todoSchema_Model");
// delete controller
module.exports.deleteData= async (req,res)=>{
    try{
        // getting params id from the frontend/user.
        let id= req.params.id;
        // console.log(id," ", " =ID");
        // deleting the matched data.
        await todoCollection.findByIdAndDelete(id);
        res.redirect("/");
    }
    catch(err){
        console.log(`ERROR= ${err}`);
    }
}