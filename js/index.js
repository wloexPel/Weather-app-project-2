function newTime(currTime) {
  let now = new Date(currTime);
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
  temperature.innerHTML = Math.round(response.data.temperature.current);
  humidity.innerHTML = response.data.temperature.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = newTime(response.data.time * 1000);
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);
}
/*function defaultLocation(cityDefault) {
  event.preventDefault();
  let apiKey = "0544e76dbd90686t4c73ocb475aa7f05";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&units=metric&key=${apiKey}`;
  axios.get(apiUrl).then(currentTemperature);
}*/

let apiKey = "0544e76dbd90686t4c73ocb475aa7f05";
let city = "Kyiv";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(currentTemperature);
//let apiKey = "e34e3e990aba780554aaf28ee3d1bd5f";
//let city = "Paris";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//let input = document.querySelector("#search-form");
//searchForm.addEventListener("submit", currentTemperature);
//let cityDefault = "Kiyv";

//defaultLocation(city);
//let data = newData();
