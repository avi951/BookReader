import BookModel from "../models/bookModule.js";
import { StatusCodes } from "http-status-codes";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";

export const getAllBooks = async (req, res) => {
  // console.log(req.user);
  const books = await BookModel.find({ createdBy: req.user._id });
  // console.log("GET All books");
  res.status(StatusCodes.OK).json({ books });
};

export const createBooks = async (req, res) => {
  req.body.createdBy = req.user._id;
  const newBook = { ...req.body };
  // console.log(req.file);

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    newBook.bookImage = response.secure_url;
    newBook.bookImageId = response.public_id;
  }
  const updatedBookImage = await BookModel.create(req.user._id, newBook);
  if (req.file && updatedBookImage.bookImageId) {
    await cloudinary.v2.uploader.destroy(updatedBookImage.bookImageId);
  }
  // console.log("Body", req.body);
  const book = await BookModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ book });
};

export const getBook = async (req, res) => {
  const book = await BookModel.findById(req.params.id);
  res.status(StatusCodes.OK).json({ book });
};

export const editBooks = async (req, res) => {
  const editBook = { ...req.body };
  console.log("Edit Book",editBook);
   
  // if (req.file) {
  //   const file = formatImage(req.file);
  //   const response = await cloudinary.v2.uploader.upload(file);
  //   editBook.bookImage = response.secure_url;
  //   editBook.bookImageId = response.public_id;
  // }

  // const updatedBookImage = await BookModel.findByIdAndUpdate(req.params.id, editBook);
  // if (req.file && updatedBookImage.bookImageId) {
  //   await cloudinary.v2.uploader.destroy(updatedBookImage.bookImageId);
  // }
 
  const updatedBook = await BookModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res
    .status(StatusCodes.OK)
    .json({ msg: "Book is updated", BookModel: updatedBook });
};

export const deleteBook = async (req, res) => {
  console.log("ID", req.params.id);
  const { id } = req.params;
  const selectedBook = await BookModel.findByIdAndDelete(id);
  if (!selectedBook) {
    return res.status(404).json({ msg: `no book with id : ${id}` });
  }
  res.status(StatusCodes.OK).json({ book: selectedBook });
};
