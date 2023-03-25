function currentTemperature(response) {
  let city = input.value;
  city.innerHTML = response.data.name;
  let temperature = document.querySelector("#temp");
  let humidity = document.querySelector("#hum");
  let windSpeed = document.querySelector("#wind");
  temperature.innerHTML = Math.round(response.data.main.temp);
  humidity.innerHTML = response.data.main.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
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
