var apiKey = "68ab3cf80e2e8d6083d2d1e1d2bb8a9a";
var API_WEATHER_URL= "https://api.openweathermap.org/data/2.5/forecast";

var API_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=68ab3cf80e2e8d6083d2d1e1d2bb8a9a&units=imperial'

    fetch(API_WEATHER_URL)
        .then(function (res) {
            if (!res.ok) throw new Error('oops')

            return res.json();
        })
        .then(function (data) {
            console.log('data :>>', data);
            var dump = document.createElement('pre');
            dump.textContent = JSON.stringify(data.list[0], null, 2);
            document.body.appendChild(dump);

            console.log(data.list[0].main.temp);
        })
        .catch(function (error) {
            console.error(error);
        });
    


