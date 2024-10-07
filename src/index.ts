import express from "express";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Welcome to Groupic Backend!");
});



const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});