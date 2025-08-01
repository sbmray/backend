import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exists: username, email
  // check for image, check for avatar
  // create user object - create entry i  database
  // remove password and refresh token field from response
  // check for user creation
  // return res
});

export { registerUser };
