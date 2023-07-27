let todoCollection = require("../model/todoSchema_Model");
// showing data to the frontend.
module.exports.home = async (req, res) => {
    try {
        // getting data from mongoDb.
        let data = await todoCollection.find({});
        let month= ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG",'SEP',"OCT","NOV","DEC"]
        // console.log(data);
        // sending data to the frontend
            res.render("home", {
                dta:data,
                mnth:month
            })
    }
    catch (err) {
        console.log(`Error = ${err}`);
    }
}