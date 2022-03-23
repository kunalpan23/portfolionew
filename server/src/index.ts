import express from "express";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("You are listening from express server");
});

app.listen(port, (err?) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});