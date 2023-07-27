let express=require("express");

let router= express.Router();

// delete route handle here by passing params id.
router.get("/:id", require("../controller/deleteDataController").deleteData);
module.exports=router;