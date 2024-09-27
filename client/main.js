const setApp = (e) => {
  if (e.key == "Enter") getResult(search.value);
};

const getResult = (city) => {
  fetch(`/api/weather/${city}`)
    .then((response) => response.json())
    .then(displayResult);
};

const displayResult = (result) => {
  console.log(result);
  const city = document.querySelector(".city");
  city.innerText = `${result.name}/${result.sys.country}`;

  const temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp - 273.15)} °C`;
  const desc = document.querySelector(".desc");
  desc.innerText = `${result.weather[0].description}`;

  const minmax = document.querySelector(".minmax");
  minmax.innerText = `min: ${Math.round(
    result.main.temp_min - 273.15
  )} °C / max: ${Math.round(result.main.temp_max - 273.15)} °C`;

  backgrounSelector(result);
};

const backgrounSelector = (result) => {
  const weather = result.weather[0].description.toLowerCase();

  if (weather.includes("rain") || weather.includes("drizzle")) {
    document.body.style.backgroundImage = "url('media/SFFd.gif')";
    document.body.style.backgroundSize = "cover";
  } else if (weather.includes("mist") || weather.includes("fog")) {
    document.body.style.backgroundImage = "url('media/9vZI.gif')";
    document.body.style.backgroundSize = "cover";
  } else if (weather.includes("cloud")) {
    document.body.style.backgroundImage = "url('media/giphy (1).webp')";
    document.body.style.backgroundSize = "cover";
  } else if (weather.includes("clear") || weather.includes("sun")) {
    document.body.style.backgroundImage =
      "url('media/1031_nc_sunny_weather_3-1.jpg')";
    document.body.style.backgroundSize = "cover";
  } else {
    document.body.style.backgroundImage = "";
  }
};

const search = document.getElementById("search");
search.addEventListener("keydown", setApp);

const searchButton = document.getElementById("button");
searchButton.addEventListener("click", () => {
  getResult(search.value);
});

const defaultCity = "Ljubljana";
getResult(defaultCity);
