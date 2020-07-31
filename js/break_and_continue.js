"use strict";
(function() {

    var input;

    while (true) {
        input = parseInt(prompt("Enter an ODD number between 1 and 50."));
        if (input % 2 !== 0 && input > 0 && input < 51) {
            break;
        }
    }

    console.log("Number to skip is " + input);

    for (var x = 1; x < 50; x += 2) {
        if (x === input) {
            console.log("Yikes! Skipping number: " + input);
            continue;
        }
        console.log("Here is an odd number: " + x);

    }



})();