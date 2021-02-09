const Book = require("../models/book");


const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        if (books) {
            res.status(201).json({
                message: "Books retrieved successfully",
                data: books
            })
        } else {
            res.status(404).send({
                message: "Books not found",
                data: null
            })
        }
    } catch (error) {
        console.log("Error retrieving books", error);
    }
}

const addNewBook = async (req, res) => {
    try {
        const book = req.body;
        const bookExist = await Book.findOne({ title: book.title });
        if (bookExist) {
            res.status(500).send({
                message: "Book title already exist",
                data: null
            })
            return;
        }
        const newBook = await Book.create(book);

        if (newBook) {
            res.status(200).json({
                message: "Book added successfully",
                data: newBook
            })
        } else {
            res.status(500).send({
                message: "Error adding new book",
                data: null
            })
        }

    } catch (error) {
        console.log("Error adding new book ", error)
    }
}

const updateBook = async (req,res) => {
    try {
        const bookId = req.params.id;
        const book = req.body;

        const bookExist = await Book.findOne({ title: book.title });
        if (bookExist) {
            res.status(500).send({
                message: "Book title already exist",
                data: null
            })
            return;
        }

        const newBook = await Book.findByIdAndUpdate(bookId, {
            book
        }, { new: true });

        if(newBook){
            res.status(201).json({
                message : "Book updated successfully",
                data : newBook
            })
        }else{
            res.status(500).send({
                message : "Error updating book",
                data : null
            })
        }


    } catch (error) {
        console.log("Error updating book", error)
    }
}

const deleteBook = async (req,res) => {
    try {
        const bookId = req.params.id;

        const bookExist = await Book.findByIdAndDelete(bookId);
        if (bookExist) {
            res.status(201).json({
                message : "Book deleted successfully",
                data : bookExist
            })
            return;
        }else{
            res.status(404).send({
                message : "Book not found",
                data : null
            })
        }


    } catch (error) {
        console.log("Error updating book", error)
    }
}

module.exports = { getAllBooks, addNewBook,updateBook,deleteBook }