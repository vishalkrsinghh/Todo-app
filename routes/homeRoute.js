let express= require("express");

let router= express.Router();

router.get("/", require("../controller/homeController").home);
router.use("/save", require("./saveDataRoute"));

module.exports=router;