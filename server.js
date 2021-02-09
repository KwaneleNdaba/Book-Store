const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./database/db");
const bookRoutes = require("./routes/book")

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const mongURI = process.env.MONGO_URI;

connectToDB(mongURI);

app.use(express.json());
app.use("/api/books", bookRoutes)


app.listen(port, () =>{
    console.log("Server is running on port", port);
})