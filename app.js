// Connects the whole app
const configuration = require("./Utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const citiesRouter = require("./controller/cities")
const middleware = require("./Utils/middleware");
const logger = require("./Utils/logger");
const mongoose = require("mongoose").set("strictQuery", true);
require("express-async-errors");

logger.info("connecting to Mongo");

mongoose.connect(configuration.MONGODB_URI)
    .then(() => {
        logger.info("Mongo Connection Success!");
    }).catch((error) => {
        logger.error("error connecting to MongoDB:", error.message);
    });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use("/cities", citiesRouter);
app.use(middleware.requestLogger);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
module.exports = app;
