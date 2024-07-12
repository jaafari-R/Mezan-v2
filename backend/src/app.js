import express, { Router } from "express";
import Config from "./config.js";

import authRoutes from "./routes/auth.routes.js";
import caseRoutes from "./routes/case.routes.js";
import courtRoutes from "./routes/court.routes.js";
import documentRoutes from "./routes/document.routes.js";
import eventRoutes from "./routes/event.routes.js";
import logRoutes from "./routes/log.routes.js";
import partyRoutes from "./routes/party.routes.js";
import stakeholderRoutes from "./routes/stakeholder.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.listen(Config.PORT, () => {
    console.log(`Server is listening on port ${Config.PORT}`);
})