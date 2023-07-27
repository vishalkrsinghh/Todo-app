let express= require("express");

let router= express.Router();
// route for saving data in MongoDb.
router.post("/",require("../controller/saveDataController").saveData);
module.exports=router;