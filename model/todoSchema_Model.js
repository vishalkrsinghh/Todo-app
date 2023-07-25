const mongoose = require("mongoose");

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

const todoCollection = mongoose.model("todoCollection", todoSchema)
module.exports = todoCollection;