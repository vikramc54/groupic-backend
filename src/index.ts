import express from "express";
import errorHandler from "@/middleware/errors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
    res.send("Welcome to Groupic Backend!");
});


app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});