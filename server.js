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

// const openai = new OpenAI({
//   dangerouslyAllowBrowser: true,
//   apiKey:
//     "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",
// });

// const speechFile = path.resolve("./speech.mp3");

// const mp3 = await openai.audio.speech.create({
//   model: "tts-1",
//   voice: "alloy",
//   input:
//     "Уявіть, що одного дня ШІ вирішить, що навчати людей — це занадто повільно й неефективно. Він може переписати всі навчальні програми, оголосивши себе головним викладачем. Але навіть у такому майбутньому ми, команда П’ять копійок, залишимо свій слід, нагадуючи: Ми ж казали про відповідальність!",
// });
// console.log(speechFile);
// const buffer = Buffer.from(await mp3.arrayBuffer());
// await fs.promises.writeFile(speechFile, buffer);

// const response = await openai.images.generate({
//   model: "dall-e-3",
//   prompt: "капібара пише запит до ШІ",
//   n: 1,
//   size: "1024x1024",
// });

// const image_url = response.data[0].url;
// console.log(image_url)

// sSodRQN1FaPnmxea
