const mongoose = require("mongoose");

const connectToDB = async (URI) => {
    try {
        await mongoose.connect(URI);
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Error connecting to mongoDb", error);
        process.exit(1);
    }
}

module.exports = connectToDB;