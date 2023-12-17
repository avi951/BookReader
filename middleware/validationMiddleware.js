import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../error/customError.js";

import mongoose from "mongoose";
import userModule from "../models/userModule.js";
import bookModule from "../models/bookModule.js";

// export const withValidationErrors = (validateValues) => {
//   return [
//     validateValues,
//     (req, res, next) => {
//       const errors = validationResult(req);
//       console.log(errors);
//       const errorMessages = errors.array().map((error) => error.msg);
//       if (!errors.isEmpty()) {
//         console.log(
//           "Error Message: ",
//           errors.array().map((error) => error.msg)
//         );
//         // return res.status(404).json({ errors: errors.array() });
//         if (errorMessages.data.errors[0].msg.startsWith("invalid")) {
//           // throw new NotFoundError(errorMessages);
//           // return res.status(200).json({ errors: error.array() });
//           throw new BadRequestError(error.array())
//         }
//         if (errorMessages[0].startsWith("not authorized")) {
//           throw new UnauthorizedError(error.array());
//           // return res.status(404).json({ errors: error.array() });
//         }
//         // return res.status(404).json({ errors: error.array() });
//         throw new BadRequestError(errorMessages);
//       }
//       next();
//     },
//   ];
// };


// export const withValidationErrors = (validateValues) => {
//   return [
//     validateValues,
//     (req, res, next) => {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         const errorMessage = errors.array().map((err) => err.msg);
//         console.log("Validatation Middleware", errorMessage ,"\n");
//         throw new BadRequestError(errorMessage);      
//       }
//       next();
//     },
//   ];
// };

export const withValidationErrors = (validateValues) =>{
  return [
    validateValues,
    (req,res,next)=>{
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        // const errorMessage = errors.array().map((error)=>error.msg);
        return res.status(400).json({error:errors.array()})
        // throw new BadRequestError(errorMessage)
      }
      next();
    }
  ]
}
export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("Invalid MongoDb Id:");
    const selectedBook = await bookModule.findById(value);
    if (!selectedBook) throw new NotFoundError(`No Book with Id ${value}`);
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await userModule.findOne({ email });
      if (user) {
        throw new BadRequestError("Email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password is required"),
]);

export const validateTestFull = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
]);

export const validateBooksInput = withValidationErrors([
  body("bookName").notEmpty().withMessage("Book Name is required"),
  body("bookPage").notEmpty().withMessage("Page No. is required"),
  body("bookAuthor").notEmpty().withMessage("Author is requried"),
  // body('ISBNNumber').notEmpty().withMessage('Enter valid ISBN Number ')
  body("ISBNNumber")
    .isLength({ min: 10 })
    .matches(/^(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$/)
    .withMessage("ISBN Number is not valid."),
]);