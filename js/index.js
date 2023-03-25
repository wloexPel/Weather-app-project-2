function newTime(currTime) {
  let now = new Date(currTime);
  let setNewH2 = document.querySelector("h2");
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
  setNewH2.innerHTML = `${day}, ${hours}:${minutes}`;
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
  city.innerHTML = response.data.name;
  temperature.innerHTML = Math.round(response.data.main.temp);
  humidity.innerHTML = response.data.main.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = newTime(response.data.dt * 1000);
}
function defaultLocation(cityDefault) {
  event.preventDefault();
  let apiKey = "0544e76dbd90686t4c73ocb475aa7f05";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&units=metric&key=${apiKey}`;
  axios.get(apiUrl).then(currentTemperature);
}
let apiKey = "0544e76dbd90686t4c73ocb475aa7f05";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&units=metric&key=${apiKey}`;

let input = document.querySelector("#search-form");
searchForm.addEventListener("submit", findCity);
let cityDefault = "Kiyv";
defaultLocation(city);
//let data = newData();
