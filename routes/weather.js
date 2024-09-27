const express = require("express");
const router = express.Router();
const {getWeatherNow} = require("../controller/weatherController")    

router.get("/:city/", getWeatherNow);

module.exports = router;
