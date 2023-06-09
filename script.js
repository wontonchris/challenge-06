var apiKey = "68ab3cf80e2e8d6083d2d1e1d2bb8a9a";
var API_WEATHER_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
var searchArea = document.querySelector(".search input");
var searchButton = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather-icon");
var city = document.querySelector(".city").value



async function checkWeather(city) {
  var response = await fetch(API_WEATHER_URL + city + "&units=imperial&APPID=" + apiKey);
  var data = await response.json();
  console.log(data);



// //fetch
// fetch ("${API_WEATHER_URL}${searchArea}&units=imperial&appid=${apiKey}")
// .then(response => response.json())
// .then(data => {
//   console.log(data);

  //display data on page

  document.querySelector(".city").innerHTML = data.list[0].name;
  document.querySelector(".temp").innerHTML = data.list[0].main.temp + "°F";
  document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.list[0].wind.speed + "mph";

  if(data.list[0].weather[0].main == "Clouds") {
    weatherIcon.src = "images/cloudy.png";
  } else if(data.list[0].weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if(data.list[0].weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if(data.list[0].weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";    
  }
}


searchButton.addEventListener("click", function() {
  checkWeather(searchArea.value)});


