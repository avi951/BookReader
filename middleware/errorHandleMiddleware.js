import { StatusCodes } from "http-status-codes";

const errorHandleMiddleware = (err, req, res, next) => {
  console.log("Error : ", err);
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "Something is went wrong, Try again later";
  res.status(statusCode).json({ msg });
};

export default errorHandleMiddleware;
