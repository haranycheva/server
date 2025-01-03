import app from "./app.js";
import mongoose from "mongoose";
// import fs from "fs";
// import path from "path";
// import OpenAI from "openai";
// import "dotenv/config"

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("DB connect");
    app.listen(3002);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
