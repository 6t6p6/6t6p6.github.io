const URL = process.env.URL
const KEY = process.env.API_KEY

const getWeather = async (city) => {
    const { lat, lon } = await getCoordinates(city)
    let api = `${URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`
    const response = await fetch(api)
    const weather = await response.json()
    return weather

}

const getCoordinates = async (city) => {
    let api = `${URL}geo/1.0/direct?q=${city}&appid=${KEY}`
    const response = await fetch(api)
    const coordinates = await response.json()
    const {lat,lon} = coordinates[0]
    return {lat, lon};
}

module.exports = {
    getCoordinates,
    getWeather
}
