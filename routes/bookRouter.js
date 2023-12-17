import { Router } from "express";
import { createBooks, getAllBooks,editBooks, deleteBook,getBook } from "../controller/bookController.js";
import { validateBooksInput, validateIdParam } from "../middleware/validationMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
// import checkForTestUser from "../middleware/authMiddleware.js";
const router = Router();

// router.get("/allbooks", getAllBooks);
router
  .route("/")
  .get(getAllBooks)
  .post(upload.single("bookImage"),validateBooksInput , createBooks)

router
  .route("/:id")
  .get(validateIdParam, getBook)
  .patch(upload.single('bookImage'),validateBooksInput, validateIdParam, editBooks)
  .delete(validateIdParam, deleteBook);

  // .post(checkForTestUser, validateBooksInput, createBooks);

export default router;
