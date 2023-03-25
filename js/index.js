function newTime() {
  let now = new Date();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function currentTemperature(response) {
  //let city = input.value;
  // city = input.value;
  let city = document.querySelector("h1");

  let temperature = document.querySelector("#temp");
  let humidity = document.querySelector("#hum");
  let windSpeed = document.querySelector("#wind");
  let dateElement = document.querySelector("h2");
  let iconElement = document.querySelector(".curr-weather");
  city.innerHTML = response.data.city;
  celciusElement = response.data.temperature.current;
  temperature.innerHTML = Math.round(celciusElement);
  humidity.innerHTML = response.data.temperature.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = newTime(response.data.time * 1000);
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);
}
function searchCity(city) {
  let apiKey = "0544e76dbd90686t4c73ocb475aa7f05";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentTemperature);
}
function submitSearchForm(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-city");
  searchCity(searchInputElement.value);
}

let input = document.querySelector("#search-form");
input.addEventListener("submit", submitSearchForm);
function showFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemperature = Math.round((celciusElement * 9) / 5 + 32);
  celcius.classList.remove("active");
  fahrenheit.classList.add("active");
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = fahrenheitTemperature;
}
function showCelciusTemp(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  fahrenheit.classList.remove("active");
  celcius.classList.add("active");
  temperature.innerHTML = Math.round(celciusElement);
}
let celciusElement = null;
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", showFahrenheitTemp);
//let celcius = document.querySelector("#celcius");
let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", showCelciusTemp);
searchCity("Kyiv");
