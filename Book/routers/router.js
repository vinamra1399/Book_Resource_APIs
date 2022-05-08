const express = require('express');
const router = new express.Router();
const book=require('../models/books')

//create a new entry for the book
router.post("/books/create", async(req, res) => {
    try{
        const user = new book(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);
    }
    catch(err){res.status(400).send(err);}
});

//read all book
router.get("/books/read", async(req, res) => {
    try {
        const _id=req.params.id;
        const booksData=await book.findById(_id);
        if(!booksData){
            return res.status(404).send();
        }else{
        res.send(booksData);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

//read a book
router.get("/books/read/:id", async(req, res) => {
    try {
        const bookData=await book.find();
        res.send(bookData);
    } catch (error) {
        res.send(error);
    }
})

//update book information
router.put("/books/update/:id",async(req, res)=>{
    try {
        const _id=req.params.id;
        const updateBook= await book.findByIdAndUpdate(_id,req.body);
        res.send(updateBook);
    } catch (error) {
        res.status(400).send(error);
    }
})

//delete a book
router.delete("/books/delete/:id",async(req, res)=>{
    try {
        const _id=req.params.id;
        const deleteBook= await book.findByIdAndDelete(_id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteBook);
    } catch (error) {
        res.status(500).send(error);
    }
})
module.exports=router;