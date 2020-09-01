mapboxgl.accessToken = mapboxToken;

restaurant1 = {
    address: "11888 Starcrest Drive, Suite 101, San Antonio, TX 78247",
    info: "Charlie Brown's Neighborhood Bar & Grill"
}
restuarant2 = {
    address: "8327 Agora Pkwy, Selma, TX, 78154",
    info: "Thai Spice & Sushi"
}
restaurant3 = {
    address: "18817 FM 2252, San Antonio, TX, 78266",
    info: "Grumpy's Mexican Cafe"
}

rest = [restaurant1, restuarant2, restaurant3];

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: [-98.4916, 29.5], // starting position [lng, lat]
    zoom: 9// starting zoom
});

rest.forEach(function(restaurant) {
    geocode(restaurant.address, mapboxToken)
        .then(function (result) {
            var restaurantMarker = new mapboxgl.Marker()
                .setLngLat(result)
                .addTo(map)
            var restaurantPopup = new mapboxgl.Popup()
                .setHTML(restaurant.info)
            restaurantMarker.setPopup(restaurantPopup)
        });
})





