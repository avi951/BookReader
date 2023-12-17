import userModule from "../models/userModule.js";
import { StatusCodes } from "http-status-codes";

export const getCurrentUser = async (req, res) => {
  // console.log("REQ:",req.user.userId);;
  const user = await userModule.findOne({ _id: req.user.userId });
  // console.log("User",user);
  res.status(StatusCodes.OK).json({ user });

  //
};
