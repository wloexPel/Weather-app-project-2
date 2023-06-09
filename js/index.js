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
function formatDay(timeStamp) {
  let date = new Date(timeStamp * 1000);
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}

function displayForecast(response) {
  let forecastDays = response.data.daily;
  let fullForecast = document.querySelector("#weather-forecast");
  let forecast = `<div class="row">`;

  forecastDays.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecast =
        forecast +
        `
            <div class="col-sm-2" align="center">
              <h5 class="forecast-heading">${formatDay(forecastDay.time)}</h5>
              <div class="card">
                <div class="card-body">
                  <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
                    forecastDay.condition.icon
                  }.png" alt="Rain" height="100" />
                  <p class="card-text">
                    <span class="weather-forecast-max">${Math.round(
                      forecastDay.temperature.maximum
                    )}°</span
                    ><span class="weather-forecast-min"> ${Math.round(
                      forecastDay.temperature.minimum
                    )}°</span>
                  </p>
                </div>
              </div>
            </div>
          `;
    }
  });
  forecast = forecast + `</div>`;
  fullForecast.innerHTML = forecast;
}

function findForecast(coordinates) {
  apiKey = "0544e76dbd90686t4c73ocb475aa7f05";
  apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function currentTemperature(response) {
  //let city = input.value;
  // city = input.value;
  let city = document.querySelector("h1");

  let temperature = document.querySelector("#temp");
  let humidity = document.querySelector("#hum");
  let windSpeed = document.querySelector("#wind");
  let currentDescription = document.querySelector("#current-description");
  let dateElement = document.querySelector("h2");
  let iconElement = document.querySelector(".curr-weather");

  city.innerHTML = response.data.city;
  celciusElement = response.data.temperature.current;

  temperature.innerHTML = Math.round(celciusElement);
  humidity.innerHTML = response.data.temperature.humidity;
  currentDescription.innerHTML = response.data.condition.description;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = newTime(response.data.time * 1000);
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);
  findForecast(response.data.coordinates);
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

let celcius = document.querySelector("#celcius");

searchCity("Vinnytsia");
