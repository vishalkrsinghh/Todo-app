let express= require("express")

let router= express.Router();

// update route handle here by passing params id.
router.post("/:paramId", require("../controller/updateDataController").updateData);
module.exports= router;
