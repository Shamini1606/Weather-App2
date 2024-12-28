// // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// // 69c97c2623310cf90ecdd51a75a0192d

let API_KEY = "69c97c2623310cf90ecdd51a75a0192d";

// getWeatherData = () => {
const URL = "https://api.openweathermap.org/data/2.5/weather";
const getWeatherData = (city) => {
  const Full_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;

  //   const Full_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(Full_URL);

  console.log(Full_URL);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

function searchCity() {
  const city = document.getElementById("city-input").value;

  getWeatherData(city)
    .then((response) => {
        console.log(response);
      showWeatherData(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.temp_min;
  document.getElementById("max-temp").innerText = weatherData.temp_max;




};
