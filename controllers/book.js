const Book = require("../models/book")

const getAllbooks = async (req, res) => {
    try {
        const books = await Book.find({});
        if(books){
            res.status(201).json({
                message : "Books retrieved successfully",
                data: books
            })
        }else{
            res.status(404).send({
                message:"books not found",
                data: null
            })
        }
    } catch (error) {
        console.log("Error retrieving books", error);
    }
}

const getSingleBookById = async (req, res) => {
   try {
    const bookId = req.params.id;
    const getBook = await Book.findOne({_id : bookId});
    if(getBook){
        res.status(201).json({
            message: "Book retrieved successfully",
            data : getBook
        })
    }else{
        res.status(404).send({
            message:"Book not found",
            data : null
        })
    }
   } catch (error) {
    console.log("Error retrieving book", error);
   }
    
}

const addNewBook = async (req, res) => {
    try {
        const newBookFormData = req.body;
        const createdBook = await Book.create(newBookFormData);
        if(createdBook){
            res.status(201).json({
                message:"Book added successfully",
                data : createdBook
            })
        }else{
            res.status(500).send({
                message : "Error adding book"
            })
        }
    } catch (error) {
        console.log("Error adding new book", error)
    }
    
}
const updateBook = async (req, res) => {
try {
    const bookToUpdate = req.body;

    const updatedBook = await Book.findByIdAndUpdate(bookToUpdate.id, {
        $set : {
            title: bookToUpdate.title || updateBook.title ,
        author: bookToUpdate.author || updateBook.author,
        year: bookToUpdate.year || updateBook.year,
        }
    },{new : true})

    if(updatedBook){
        res.status(201).json({
            message: "Book updated successfully",
            data : updatedBook
        })
    }else{
        res.status(404).send({
            message:"Book not found",
            data : null
        })
    }
} catch (error) {
    console.log("Error updating book", error)
}
    
}

const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id; 
        const deletedBook = await Book.findOneAndDelete({_id:bookId});
        if(deletedBook){
            res.status(201).json({
                message: "Book deleted successfully",
                data : deletedBook
            })
        }else{
            res.status(404).send({
                message:"Book not found",
                data : null
            })
        }
    } catch (error) {
        console.log("Error deleting book", error);
    }
    
}

module.exports = {getAllbooks,getSingleBookById,addNewBook, deleteBook, updateBook}