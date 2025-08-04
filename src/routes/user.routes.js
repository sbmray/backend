import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar", // Assuming 'avatar' is the field name for the image upload
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1, // ek hi image upload kar sakte hai
    },
  ]),
  registerUser
);

export default router;
