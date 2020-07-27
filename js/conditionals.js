"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyseColor(color) {
    if (color ==="red") {
        return "Roses are red.";
    } else if (color === "orange") {
        return "Oranges are orange.";
    } else if (color === "yellow") {
        return "The sun is yellow.";
    } else if (color === "green") {
        return "Grass is green.";
    } else if (color === "blue") {
        return "The sky is blue.";
    } else if (color === "indigo") {
        return "I don't know anything that is indigo.";
    } else if (color === "violet") {
        return "Prince loves violet.";
    } else {
        return "I don't know that color.";
    }
}

console.log(analyseColor("cyan"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyseColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyseAnotherColor(color) {
    switch(color) {
        case "red":
            return "Blood is red.";
            break;
        case "orange":
            return "fire is orange.";
            break;
        case "yellow":
            return "sulfur is yellow.";
            break;
        case "green":
            return "mold is green.";
            break;
        case "blue":
            return "water is blue.";
            break;
        case "indigo":
            return "i don't know anything that is indigo.";
            break;
        case "violet":
            return "grape kool-aid is violet.";
            break;
        default:
            return "I don't know that color";
            break;
    }
}

console.log(analyseAnotherColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var inputColor = prompt("Enter a color.");
alert(analyseColor(inputColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(lucky, subTotal) {
    if (lucky ===0 ) {
        var totalCost = subTotal;
    } else if (lucky === 1) {
        var totalCost = subTotal - (subTotal * .1);
    } else if (lucky === 2) {
        var totalCost = subTotal - (subTotal * .25);
    } else if (lucky === 3) {
        var totalCost = subTotal - (subTotal * .35);
    } else if (lucky === 4) {
        var totalCost = subTotal - (subTotal * .5);
    } else if (lucky === 5) {
        var totalCost = 0;
    } else {
        console.log("not a valid lucky number")
    }
    return totalCost.toFixed(2);

}
console.log("$" + calculateTotal(2, 45));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userBill = prompt("Please enter your total bill:");
userBill = parseFloat(userBill);
var discountedBill = calculateTotal(luckyNumber, userBill);

alert("Your bill before discount was $" + userBill + ".  Your lucky number was " + luckyNumber + ".  Your final bill is for $" + discountedBill);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var userInput = confirm("Would you like to enter a number?");
if (userInput) {
    var num = parseFloat(prompt("Enter a number."));
    if (num % 2 === 0) {
        alert(num + " is an even number.");
    } else {
        alert(num + " is an odd number");
    }
    alert(num + " + 100 = " + (num + 100));
    if (num < 0) {
        alert(num + " is a negative number.");
    } else {
        alert(num +" is a positive number");
    }
}