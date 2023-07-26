let express=require("express");

let router= express.Router();


router.get("/:id", require("../controller/deleteDataController").deleteData);
module.exports=router;