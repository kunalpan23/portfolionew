import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'; 
import path from 'path';
import { FILE_NAME} from './docs';
dotenv.config();
const app = express();
const port = 3000;


app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Connected!");
});

app.get("/download", function(req, res){
  const fileName = "kunalresume.pdf";

  res.download(path.join(__dirname, `/docs/${FILE_NAME}`), fileName, (err) => {
    if(err){
      console.log("Error@Download: ", err);
    }
  });
});

app.listen(port, (err?) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});