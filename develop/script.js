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
        cityName.textContent = data.city.name;
        date.textContent = new Date().toLocaleDateString();
        icon.innerHTML = `<img src="http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png" alt="Weather Icon">`;
        temperature.textContent = `${data.list[0].main.temp.toFixed(1)}°C`;
        humidity.textContent = `Humidity: ${data.list[0].main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.list[0].wind.speed} m/s`
      


    
        // Update 5-day forecast
        var forecastIndex = 0;
        for (var i = 0; i < forecastDays.length; i++) {
            forecastDays[i].querySelector(".forecast-date").textContent = new Date(data.list[forecastIndex].dt_txt).toLocaleDateString();
            forecastDays[i].querySelector(".forecast-icon").innerHTML = `<img src="http://openweathermap.org/img/w/${data.list[forecastIndex].weather[0].icon}.png" alt="Weather Icon">`;
            forecastDays[i].querySelector(".forecast-temperature").textContent = `${data.list[forecastIndex].main.temp.toFixed(1)}°C`;
            forecastDays[i].querySelector(".forecast-humidity").textContent = `Humidity: ${data.list[forecastIndex].main.humidity}%`;
            forecastIndex += 8;
        }
        })
      
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
