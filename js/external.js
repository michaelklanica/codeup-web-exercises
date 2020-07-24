"use strict";
console.log("Hello from external Javascript");

alert("Welcome to my website!");

var color = prompt("What is your favorite color?");

alert(color + " is my favorite color, too!");

//Exercise 3.1
var theLittleMermaid = prompt("How long would you like to rent The Little Mermaid?");
var brotherBear = prompt("How long would you like to rent Brother Bear?");
var hercules = prompt("How long would you like to rent Hercules?");

var cost = (theLittleMermaid * 3) + (brotherBear * 3) + (hercules * 3);
cost = "$" + cost.toFixed(2);
alert("Total cost of rentals is " + cost);

//Exercise 3.2
var googleRate = prompt("What is the pay rate at Google?");
var googleHours = prompt("How many hours did you work for Google?");
var facebookRate = prompt("What is the pay rate at Facebook?");
var facebookHours = prompt("How many hours did you work for Facebook?");
var amazonRate = prompt("What is the pay rate at Amazon?");
var amazonHours = prompt("How many hours did you work for Amazon?");

var totalPay = (googleHours * googleRate) + (facebookHours * facebookRate) + (amazonHours * amazonRate);
totalPay = "$" + totalPay.toFixed(2);

alert("Your total pay is " + totalPay);

//Exercise 3.3

var classClosed = false;
var conflict = confirm("Does this class conflict with any scheduled already?");
if (classClosed || conflict) {
    alert("you cannot attend this class");
} else {
    alert("Enjoy the class");
}

//Exercise 3.4

var premiumMember = false;
var offerValid = true;
var items = prompt("How many items are in your cart?");
if (premiumMember) {
    alert("Offer applied.  You are a Premium Member");
} else if (items > 2 && offerValid){
    alert("You are purchasing more than two items. Offer Applied");
} else {
    alert("Offer does not apply.");
}