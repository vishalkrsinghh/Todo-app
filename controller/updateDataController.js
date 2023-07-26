let todoCollection=require("../model/todoSchema_Model");
module.exports.updateData=async (req,res)=>{

    try{
        let paramsId= req.params.paramId;
        await todoCollection.findByIdAndUpdate(paramsId, req.body);
        res.redirect("/");
    }
    catch(err){
        console.log(`ERROR ==  ${err}`);
    }
}