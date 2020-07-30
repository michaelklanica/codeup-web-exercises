"use strict";
(function() {


    //For Loop Exercise 2
    function showMultiplicationTable (num) {
        for (var x = 1; x <= 10; x++) {
            console.log(num + " x " + x + " = " + (num * x));
        }
    }
    showMultiplicationTable(5);

    //For Loop Exercise 3
    function isEvenOrOdd() {
        for (var x = 1; x <= 10; x++) {
            var random = Math.floor((Math.random() * 200) + 20);
            if (random % 2 === 0) {
                console.log(random + " is even.");
            } else {
                console.log(random + " is odd.");
            }
        }
    }
    isEvenOrOdd();

    //For Loop Exercise 4
    for (var x = 1; x < 10; x++) {
        console.log(x.toString().repeat([x]));
    }

    //For Loop Exercise 5
    for (var x = 100; x > 0; x -= 5) {
        console.log(x);
    }



})();
