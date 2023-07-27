const mongoose = require("mongoose");
// creating a bluePrint or schema of the documents
let todoSchema = mongoose.Schema({

    discription: {
        type: String,
        require: true
    },
    select: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    // date: {
    //     type: String,
    //     require: true
    // }
})

// creating a collection in MongoDb.
const todoCollection = mongoose.model("todoCollection", todoSchema)
// exporting that collection.
module.exports = todoCollection;