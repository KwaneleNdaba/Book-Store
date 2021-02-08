const express = require("express");
const {getAllbooks,getSingleBookById,addNewBook, deleteBook, updateBook} = require("../controllers/book.controller")


const router = express.Router();

router.get("/books",getAllbooks);
router.get("/books/:id",getSingleBookById);
router.post("/addBook",addNewBook);
router.put("/updateBook/:id",updateBook);
router.delete("/deleteBook/:id",deleteBook);