let express= require("express");

let router= express.Router();

router.get("/", require("../controller/homeController").home);
router.use("/save", require("./saveDataRoute"));
router.use("/delete", require("./deleteDataRoute"));
router.use("/update", require("./updateDataRoute"));

module.exports=router;