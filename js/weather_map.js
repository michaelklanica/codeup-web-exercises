"use strict";
(function () {

    let locationCoord = [-98.4916, 29.4260];
    console.log(locationCoord);


    // Gather Current Weather
    function getCurrentConditions(lon, lat) {
        $.get("https://api.openweathermap.org/data/2.5/weather",
            {
                APPID: openWeatherKey,
                lon: lon,
                lat: lat,
                units: "imperial"
            }).done(function (currentWeather) {
            var icon = 'http://openweathermap.org/img/wn/' + currentWeather.weather[0].icon + '@2x.png'
            $('#current-weather').append(
                "<p>Current Temp: " + currentWeather.main.temp + "&#8457</p>" +
                "<p>Feels like: " + currentWeather.main.feels_like + "&#8457</p>" +
                "<img src='" + icon + "'>" +
                "<p>Description: " + currentWeather.weather[0].description + "</p>" +
                "<p>Wind: " + currentWeather.wind.speed + "mph</p>" +
                "<p>Pressure: " + currentWeather.main.pressure + "hPa</p>" +
                "<p>Humidity: " + currentWeather.main.humidity + "%</p>"
            );
        })
    }

    // Gather 5-Day Forecast
    function getFiveDayForecast(lon, lat) {
        $.get("http://api.openweathermap.org/data/2.5/forecast",
            {
                APPID: openWeatherKey,
                lon: lon,
                lat: lat,
                units: "imperial"
            }).done(function (forecastWeather) {
            // Testing if 5-day forecast is being gathered
            for (var i = 5; i <= 37; i += 8) {
                var icon = 'http://openweathermap.org/img/wn/' + forecastWeather.list[i].weather[0].icon + '@2x.png'
                $('#five-day-forecast').append(
                    "<p>" + forecastWeather.list[i].dt_txt.substring(0, 11) + "</p>" +
                    "<p>" + forecastWeather.list[i].main.temp + "&#8457 / " + forecastWeather.list[i].main.feels_like + "&#8457</p>" +
                    "<img src='" + icon + "'>" +
                    "<p>" + forecastWeather.list[i].weather[0].description + "</p>" +
                    "<p>Wind: " + forecastWeather.list[i].wind.speed + "mph</p>" +
                    "<p>Pressure: " + forecastWeather.list[i].main.pressure + "hPa</p>" +
                    "<p>Humidity: " + forecastWeather.list[i].main.humidity + "%</p>"
                );
            }


        })
    }

    getCurrentConditions(locationCoord[0], locationCoord[1]);
    getFiveDayForecast(locationCoord[0], locationCoord[1]);

})();
