let todoCollection=require("../model/todoSchema_Model");
// update controller.
module.exports.updateData=async (req,res)=>{
    try{
        // getting params id from the frontend/user, for which document to be deleted.
        let paramsId= req.params.paramId;
        // updating the matched data.
        await todoCollection.findByIdAndUpdate(paramsId, req.body);
        res.redirect("/");
    }
    catch(err){
        console.log(`ERROR ==  ${err}`);
    }
}