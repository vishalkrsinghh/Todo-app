let express= require("express");

let router= express.Router();

router.post("/",require("../controller/saveDataController").saveData);
module.exports=router;