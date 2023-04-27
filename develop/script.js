var apiKey = "68ab3cf80e2e8d6083d2d1e1d2bb8a9a";
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast";

var form = document.querySelector("form");
var cityInput = document.querySelector("#city");
var cityName = document.querySelector("#city-name");
var date = document.querySelector("#date");
var icon = document.querySelector("#icon");
var temperature = document.querySelector("#temperature");
var humidity = document.querySelector("#humidity");
var windSpeed = document.querySelector("#wind-speed");
var forecastDays = document.querySelectorAll(".forecast-day");

// Get weather data for the city
function getWeatherData(city) {
  var url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Update current weather section
      cityName.textContent = data.name;
      date.textContent = new Date().toLocaleDateString();
      icon.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
      temperature.textContent = `${data.main.temp.toFixed(1)}°C`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

      // Update 5-day forecast
      for (let i = 0; i < 5; i++) {
        var forecast = data.list[i + 1];
        var forecastDay = forecastDays[i];
        forecastDay.querySelector(".date").textContent = new Date(forecast.dt_txt).toLocaleDateString();
        forecastDay.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="Weather Icon">`;
        forecastDay.querySelector(".temperature").textContent = `${forecast.main.temp.toFixed(1)}°C`;
        forecastDay.querySelector(".humidity").textContent = `Humidity: ${forecast.main.humidity}%`;
        forecastDay.querySelector(".wind-speed").textContent = `Wind Speed: ${forecast.wind.speed} m/s`;
      }
    })
    .catch(error => {
      console.log(error);
      alert("Sorry, could not fetch weather data for the city.");
    });
}

// Handle form submission
form.addEventListener("submit", event => {
  event.preventDefault();
  var city = cityInput.value;
  if (city) {
    getWeatherData(city);
    // Add the city to the search history
    var historyList = document.querySelector("#history-list");
    var listItem = document.createElement("li");
    listItem.textContent = city;
    historyList.appendChild(listItem);
    // Clear the input field
    cityInput.value = "";
  } else {
    alert("Please enter a city name.");
  }
});
