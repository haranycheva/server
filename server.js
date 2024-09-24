import app from "./app.js"
import mongoose from 'mongoose';
// import "dotenv/config"

const {DB_HOST} = process.env

mongoose.connect(DB_HOST).then(() => {
  console.log("DB connect")
  app.listen(3001);
}).catch((err) => {
  // console.log(err.message);
  process.exist(1)
})


// sSodRQN1FaPnmxea