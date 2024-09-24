import express from "express";
import cors from "cors";
import postRouter from "./routes/post-router.js";

const app = express();

app.use(cors());

app.use((req, res, next) => {
  console.log("middleware");

  next();
});

app.use(express.json());

app.use("/api/post", postRouter)

app.get("/", (req, res) => {
  res.status(219).json("Hello World");
});

// app.use((err, req, res, next) => {
//   res.status(err.status).json({message: err.message})
// });

  // console.log(req.body);
  //   console.log(req.params);
  // console.log(req.query);



export default app