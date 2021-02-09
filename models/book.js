const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    title : {
        type : String ,
        require : [true , "Book title is required"],
        unique : [true , "Book title must be unique"],
        maxLength : [30, "Book title must be less than 30 characters"],
        minLength : [2, "Book title minumum length is 2"]
    },
    author : {
        type : String ,
        require : [true , "Book author is required"],
        maxLength : [30, "Book author must be less than 30 characters"],
        minLength : [2, "Book author minumum length is 2"]
    },
    year : {
        type : Number ,
        require : [true , "Book year is required"],
        maxLength : [1000, "Book author must be less than 1000 years"],
        minLength : [new Date().getFullYear(), "Book year must be in the past"]
    },
    createdAt : {
        type : Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Book", BookSchema);