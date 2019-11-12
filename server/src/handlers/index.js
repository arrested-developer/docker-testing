const express = require("express");
const handleAddCheese = require("./handleAddCheese");
const handleGetCheeses = require("./handleGetCheeses");
const handleGetOneCheese = require("./handleGetOneCheese");

const router = express();

router.get("/cheeses", handleGetCheeses);

router.put("/cheeses/:type", handleAddCheese);

router.get("/cheeses/:type", handleGetOneCheese);

module.exports = router;
