const express = require("express");
const {getAllbooks,getSingleBookById,addNewBook, deleteBook, updateBook} = require("../controllers/book")


const router = express.Router();

router.get("/getBooks",getAllbooks);
router.get("/getBook/:id",getSingleBookById);
router.post("/addBook",addNewBook);
router.put("/updateBook",updateBook);
router.delete("/deleteBook/:id",deleteBook);


module.exports = router;