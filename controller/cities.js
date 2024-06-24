
const citiesRouter = require("express").Router();
const City = require("../models/city")
const express = require("express");
const app = express();
app.use(express.json());

citiesRouter.get("/", async (request, response) => {
    const categories = await City.find({})
    response.json(categories);
});


module.exports = citiesRouter;


