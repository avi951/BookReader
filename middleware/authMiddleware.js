import { verifyJWT } from "../utils/tokenUtils.js";
import { BadRequestError, UnauthenticatedError } from "../error/customError.js";

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies; 
  //  console.log("token",token);
  if (!token) {
    throw new UnauthenticatedError("authentication invalid");
  }
  try {
    // console.log("Verify Token : === ", verifyJWT(token));
    const { userId, role } = verifyJWT(token);
    // console.log("USER ID: === ", userId);
    const testUser = userId === "6527767131fbf81944935440";
    req.user = { userId, role, testUser };
    // console.log("REQ.USER", req.user);
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};


// export const checkForTestUser = (req, res, next) => {
//   if (req.user.testUser) throw new BadRequestError("Demo User. Read Only!");
//   next();
// };