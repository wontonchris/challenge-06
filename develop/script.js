var apiKey = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={68ab3cf80e2e8d6083d2d1e1d2bb8a9a}';


fetch(apiKey + "&q=" + city + "&units=imperial")
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayWeather(data, city);
            });
        } else {
            alert("Error: " + response.statusText);
        }
    })
    .catch(function (error) {
        alert("Unable to connect to OpenWeather");
    });

// var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
// var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

// var searchForm = document.querySelector('form');
// var cityNameInput = document.querySelector('#city');
// var searchBtn = document.querySelector('#search-btn');
// var cityNameDisplay = document.querySelector('#city-name');
// var dateDisplay = document.querySelector('#date');
// var iconDisplay = document.querySelector('#icon');
// var tempDisplay = document.querySelector('#temperature');
// var humidityDisplay = document.querySelector('#humidity');
// var windSpeedDisplay = document.querySelector('#wind-speed');
// var forecastDisplay = document.querySelector('.forecast');
// var historyList = document.querySelector('#history-list');

// var history = JSON.parse(localStorage.getItem('history')) || [];

