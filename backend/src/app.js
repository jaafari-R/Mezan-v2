import express, { Router } from "express";

const PORT = 4000

const app = express();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})