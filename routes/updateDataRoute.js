let express= require("express")

let router= express.Router();

router.post("/:paramId", require("../controller/updateDataController").updateData);
module.exports= router;
