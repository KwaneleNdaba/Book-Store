const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./database/db");
const bookRoutes = require("./routes/book")
dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

connectToDB(mongoURI);


app.use("/api/books", bookRoutes)


app.listen(port, () =>{
    console.log("Server is running on port", port);
})