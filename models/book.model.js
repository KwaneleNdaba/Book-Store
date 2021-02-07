const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title : {
        type : String ,
        required : [true, "Book title is required"],
        unique : true,
        trim : true,
        maxLength : [100, "Book title cannot be more than 100 characters"]
    },
    author : {
        type : String ,
        required : [true , "Book Author is required"],
        trim : true,
    },
    year : {
        type : Number ,
        required : [true , "Book Year is required"],
        min : [1000, "Year must be at least 1000"],
        max : [new Date().getFullYear(), "Year cannot be in the future"]
    },
    createdAt : {type : Date , default : Date.now}
})


module.exports  = mongoose.model("Book", bookSchema);