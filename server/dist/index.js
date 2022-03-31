import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
dotenv.config();
const app = express();
const port = 3000;
app.use(cors());
app.get("/", (req, res) => {
    res.send("Server Connected!");
});
app.get("/download", function (req, res) {
    res.download(path.resolve("/docs/KunalResume1.pdf"));
});
app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map