"use strict";
(function () {
    // DEFAULT STARTING POINT
    let locationCoord = [-98.4916, 29.4260];
    getCurrentConditions(locationCoord[0], locationCoord[1]);
    getFiveDayForecast(locationCoord[0], locationCoord[1]);

    $('#five-day-toggle').click(function() {
        $('#five-day-forecast').slideToggle().css('display', 'flex');
    });

    // Set Map
    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
        center: [-98.4916, 29.4260], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    // Gather Current Weather
    function getCurrentConditions(lon, lat) {
        $('#current-weather').empty()
        $.get("https://api.openweathermap.org/data/2.5/weather",
            {
                APPID: openWeatherKey,
                lon: lon,
                lat: lat,
                units: "imperial"
            }).done(function (currentWeather) {
            $('#current-weather').append(

                "<p>Current conditions for <b>" + currentWeather.name + "</b>:  " + currentWeather.weather[0].description.toUpperCase() + "</p>" +
                "<p>Temp: " + currentWeather.main.temp + "&#8457 " +
                "(Feels like: " + currentWeather.main.feels_like + "&#8457) / " +
                "Wind: " + currentWeather.wind.speed + "mph" + " / " +
                "Pressure: " + currentWeather.main.pressure + "hPa / " +
                "Humidity: " + currentWeather.main.humidity + "%</p>"
            );
        })
    }

    // Gather 5-Day Forecast
    function getFiveDayForecast(lon, lat) {
        $('#five-day-forecast').empty();
        $.get("http://api.openweathermap.org/data/2.5/forecast",
            {
                APPID: openWeatherKey,
                lon: lon,
                lat: lat,
                units: "imperial"
            }).done(function (forecastWeather) {
            for (var i = 5; i <= 37; i += 8) {
                var icon = 'http://openweathermap.org/img/wn/' + forecastWeather.list[i].weather[0].icon + '@2x.png'
                $('#five-day-forecast').append(
                    "<div id='each-day' class='col'>" +
                    "<h4>" + forecastWeather.list[i].dt_txt.substring(0, 11) + "</h4>" +
                    "<img id='weather-image' src='" + icon + "'>" +
                    "<p>" + forecastWeather.list[i].main.temp + "&#8457 / " + forecastWeather.list[i].main.feels_like + "&#8457</p>" +
                    "<p>" + forecastWeather.list[i].weather[0].description + "</p>" +
                    "<p>Wind: " + forecastWeather.list[i].wind.speed + "mph</p>" +
                    "<p>Pressure: " + forecastWeather.list[i].main.pressure + "hPa</p>" +
                    "<p>Humidity: " + forecastWeather.list[i].main.humidity + "%</p>" +
                    "</div>"
                );
            }
        })
    }


    $('#locationBtn').click(function() {
        var weatherLocation = $('#location').val();
        geocode(weatherLocation, mapboxToken).then(function(result) {
            console.log(result);
            map.setCenter(result);
            map.setZoom(9);
            var marker = new mapboxgl.Marker({
                draggable: true
            })
                .setLngLat(result)
                .addTo(map);

            function onDragEnd() {
                var lngLat = marker.getLngLat();
                getCurrentConditions(lngLat.lng, lngLat.lat);
                getFiveDayForecast(lngLat.lng, lngLat.lat);
            }

            marker.on('dragend', onDragEnd);
            getCurrentConditions(result[0], result[1]);
            getFiveDayForecast(result[0], result[1]);
        });
    });
})();
