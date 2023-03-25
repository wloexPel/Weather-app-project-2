let apiKey = "0544e76dbd90686t4c73ocb475aa7f05";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&units=metric&key=${apiKey}`;

let searchInForm = document.querySelector("form");
let input = document.querySelector("search-form");
let city = Input.value;
