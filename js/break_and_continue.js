"use strict";
(function() {

    var input = prompt("Enter an ODD number between 1 and 50.");

    while (input > 50 || input % 2 === 0) {
        input = prompt("Enter an ODD number between 1 and 50.");
    }

    console.log("Number to skip is " + input);

    for (var x = 1; x < 50; x += 2) {
        if (x === parseInt(input)) {
            console.log("Yikes! Skipping number: " + input);
            continue;
        }
        console.log("Here is an odd number: " + x);

    }



})();