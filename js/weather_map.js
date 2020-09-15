"use strict";
(function () {

    let locationCoord = [-98.4916, 29.4260]; // Test Coordinates
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
            $('#current-weather').append(
                "<p><b>Current conditions for " + currentWeather.name + ":  </b>Temp: " + currentWeather.main.temp + "&#8457  -  " +
                "Feels like: " + currentWeather.main.feels_like + "&#8457  -  " +
                "Description: " + currentWeather.weather[0].description +
                "  -  Wind: " + currentWeather.wind.speed + "mph" +
                "  -  Pressure: " + currentWeather.main.pressure + "hPa" +
                "  -  Humidity: " + currentWeather.main.humidity + "%</p>"
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
                    "<div class='col-2.8 card m-1'>" +
                    "<h4 class='card-title'>" + forecastWeather.list[i].dt_txt.substring(0, 11) + "</h4>" +
                    "<img class='card-img-top' src='" + icon + "'>" +
                    "<div class='card-body'><p>" + forecastWeather.list[i].main.temp + "&#8457 / " + forecastWeather.list[i].main.feels_like + "&#8457</p>" +
                    "<p>" + forecastWeather.list[i].weather[0].description + "</p>" +
                    "<p>Wind: " + forecastWeather.list[i].wind.speed + "mph</p>" +
                    "<p>Pressure: " + forecastWeather.list[i].main.pressure + "hPa</p>" +
                    "<p>Humidity: " + forecastWeather.list[i].main.humidity + "%</p>" +
                    "</div></div>"
                );
            }
        })
    }

    getCurrentConditions(locationCoord[0], locationCoord[1]);
    getFiveDayForecast(locationCoord[0], locationCoord[1]);

})();
