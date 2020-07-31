"use strict";
(function() {

    var car1 = ["Ford", "Escort", "silver", 1991, "manual"];
    var car2 = ["Ford", "Escort", "green", 1998, "automatic"];
    var car3 = ["Kia", "Rio", "red", 2003, "automatic"];
    var car4 = ["Toyota", "4Runner", "white", 2003, "automatic"];
    var car5 = ["Toyota", "FJ Cruiser", "silver", 2008, "automatic"];

    var someArray = [car1, car2, car3, car4, car5];


    for (var i = 0; i < someArray.length; i++) {
        // console.log(someArray[i], typeof someArray[i]);
        for (var x = 0; x < someArray[i].length; x++) {
            console.log(someArray[i][x], typeof someArray[i][x]);
        }
    }

    car1.forEach(function(model) {
       console.log(model);
    });




















})();