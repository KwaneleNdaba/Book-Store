const mongoose = require("mongoose");

const connectToDB = async (mongoURI) => {
    try {
        mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Error connecting to mongoDB: ", error)
    }
}

module.exports = connectToDB