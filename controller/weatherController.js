const { getWeather } = require("./helpers")
const URL = process.env.URL
const KEY = process.env.API_KEY

const getWeatherNow = async (req, res) => {
    const {city} = req.params
    try {
        const result = await getWeather(city)
        res.json(result);
      } catch (err) {
        console.error(err);
        res
          .status(500)
          .send({ error: "An error occurred while finding coordinates." });
      }
    
}


module.exports = {
    getWeatherNow,
}