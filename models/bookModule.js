import mongoose from "mongoose";
import { BOOK_CATEGORIES, BOOK_SUBCATEGORIES } from "../utils/constant.js";

const BookSchema = new mongoose.Schema(
  {
    bookName: String,
    bookPage: Number,
    bookAuthor: String,
    bookDescription: String,
    ISBNNumber: {
      unique:true,
      type: String
    },
    bookCategory: {
      type: String,
      enum: Object.values(BOOK_CATEGORIES),
      default: BOOK_CATEGORIES.FICTION,
    },
    bookSubCategory: {
      type: String,
      enum: Object.values(BOOK_SUBCATEGORIES),
      default: BOOK_SUBCATEGORIES.ADVENTURE,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    publication: String,
    recommendedBy: String,
    bookImage:String,
    bookImageId:String,
    StartedBy: {
      type: Date,
      get: function (date) {
        return formateDate(date);
      },
      set: function (date) {
        return new Date(date);
      },
    },
    finishedBy: {
      type: Date,
      get: function (date) {
        return formateDate(date);
      },
      set: function (date) {
        return new Date(date);
      },
    },
    Link: String,
  },
  { timestamps: new Date() }
);

function formateDate(date) {
  return date.toISOString().slice(0, 10);
}

export default mongoose.model("bookdata", BookSchema);
