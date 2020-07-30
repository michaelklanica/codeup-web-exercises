"use strict";
(function() {

    var numOfIterations = 1, num = 1;
    while (numOfIterations <= 16) {
        num *= 2;
        console.log(num);
        numOfIterations++;
    }

    var allCones = Math.floor(Math.random() * 50) + 50;
    var conesSold = 0;
    console.log("You have " + allCones + " left to sell.");
    do {
        conesSold = Math.floor(Math.random() * 5) + 1;
        if (allCones - conesSold >= 0) {
            allCones -= conesSold;
            console.log(conesSold + " cones sold...");
            continue;
        }
        console.log("I cannot sell you " + conesSold + ".  I only have " + allCones + " left to sell.");
    } while(allCones > 0);
    console.log("Yay! I sold them all!");

})();