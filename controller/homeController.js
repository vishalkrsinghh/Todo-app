let todoCollection = require("../model/todoSchema_Model");

module.exports.home = async (req, res) => {
    try {
        let data = await todoCollection.find({});
        let month= ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG",'SEP',"OCT","NOV","DEC"]
        // console.log(data);
            res.render("home", {
                dta:data,
                mnth:month
            })
    }
    catch (err) {
        console.log(`Error = ${err}`);
    }
}