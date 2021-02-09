const express = require("express");
const {getAllBooks,addNewBook,updateBook,deleteBook} = require("../controllers/book");

const router = express.Router();

router.get("/getAllBooks", getAllBooks);
router.post("/addNewBook", addNewBook);
router.put("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook);



module.exports = router;