import UserModule from "../models/userModule.js";
import { StatusCodes } from "http-status-codes";
import { creatJWT } from "../utils/tokenUtils.js";
import { comparepassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../error/customError.js";

export const register = async (req, res) => {
  const isFirstAccount = (await UserModule.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const user = await UserModule.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "user created" });
};

export const login = async (req, res) => {
  const user = await UserModule.findOne({ email: req.body.email });
  const isValidUser =
    user && (await comparepassword(req.body.password, user.password));
  if (!isValidUser) {
    return res.status(400).json({error:'Invalid Credetials'})
  }
  const token = creatJWT({ userId: user._id, role: user.role });
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({ msg: "User logged in" });
};

export const logout = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};
