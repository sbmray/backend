// require("dotenv").config({ path:  "./env" });
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB() //this return a promise so use .then and .catch
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `server is running at port: http://localhost:${process.env.PORT}`
      );
    });
  })

  .catch((err) => {
    console.log("MONGO DB connection failed !!!", err);
  });
