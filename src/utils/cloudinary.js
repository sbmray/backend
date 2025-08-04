import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return "No file path provided for upload.";
   
    //upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // Automatically determine the resource type (image, video, etc.)
    });

    //file uploaded successfully
    // console.log("File uploaded successfully on cloudinary", response.url);

    fs.unlinkSync(localFilePath); // delete the file from local storage after upload
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // delete the file from local storage as operation failed
    return null; // return null if upload fails
  }
};

export { uploadOnCloudinary };
