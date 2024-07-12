import express, { Router } from "express";
import Config from "./config.js";

const app = express();

app.listen(Config.PORT, () => {
    console.log(`Server is listening on port ${Config.PORT}`);
})