import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
const app = express();
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import bookRouter from "./routes/bookRouter.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import errorHandleMiddleware from "./middleware/errorHandleMiddleware.js";
import cookieParser from "cookie-parser";
import { body, param, validationResult } from "express-validator";
import { validateTestFull } from "./middleware/validationMiddleware.js";

//  Upload Pictures
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import morgan from "morgan";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.static(path.resolve(__dirname, "./0_userInterface/dist")));
// app.use(express.static(path.resolve(__dirname, "./client/dist")));

app.use(cookieParser());
app.use(express.json());
app.use(errorHandleMiddleware);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", authenticateUser, userRouter);
app.use("/api/v1/books", authenticateUser, bookRouter);

// app.get('/', async (req, res, next) => {
//   try {
//     let html = fs.readFileSync(path.resolve(root, 'index.html'), 'utf-8')

//     // Transform HTML using Vite plugins.
//     html = await viteServer.transformIndexHtml(req.url, html)

//     res.send(html)
//   } catch (e) {
//     return next(e)
//   }
// })
// app.post(
//   "/api/v1/test",
//   [body("name").notEmpty().withMessage("name is required")],
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       const errorMessages = errors.array().map((error) => error.msg);
//       console.log("Server ErrorMessages", errorMessages);
//       return res.status(400).json({ errors: errorMessages });
//     }
//     next();
//   },
//   (req, res) => {
//     const { name } = req.body;
//     res.json({ msg: `hello ${name}` });
//   }
// );

// app.post("/api/v1/testFull", validateTestFull, (req, res) => {
//   const { name } = req.body;
//   res.json({ msg: `hello full test : ${name}` });
// });

// app.use("*", (req, res) => {
//   res.status(404).json({ msg: "not found" });
// });


app.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"./0_userInterface/dist",'index.html'))
  // res.sendFile(path.resolve(__dirname,"./public","index.html"))
})
const port = process.env.PORT || 5173;

try {
  await mongoose.connect(process.env.MONGODB_URL);
  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
