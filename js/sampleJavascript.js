"use strict";
(function() {
    //
    // var car1 = ["Ford", "Escort", "silver", 1991, "manual"];
    // var car2 = ["Ford", "Escort", "green", 1998, "automatic"];
    // var car3 = ["Kia", "Rio", "red", 2003, "automatic"];
    // var car4 = ["Toyota", "4Runner", "white", 2003, "automatic"];
    // var car5 = ["Toyota", "FJ Cruiser", "silver", 2008, "automatic"];
    //
    // var someArray = [car1, car2, car3, car4, car5];
    //
    //
    // for (var i = 0; i < someArray.length; i++) {
    //     // console.log(someArray[i], typeof someArray[i]);
    //     for (var x = 0; x < someArray[i].length; x++) {
    //         console.log(someArray[i][x], typeof someArray[i][x]);
    //     }
    // }
    //
    // car1.forEach(function(model) {
    //    console.log(model);
    // });
    //
    // // Assessment #2
    // // Solution #1
    // function isANumber(value) {
    //     if (typeof value === "boolean" || value === null) {
    //         return false;
    //     }
    //     return true;
    // }
    //
    // // Solution #2
    // function increment(value) {
    //     if(isANumber(value)) {
    //         return value + 1;
    //     } else {
    //         return false;
    //     }
    // }
    //
    // // Solution #3
    // function decrement(value) {
    //     if(isANumber(value)) {
    //         return value - 1;
    //     } else {
    //         return false;
    //     }
    // }
    //
    // // Solution #4
    // function getHighestNumber(value1, value2, value3) {
    //     if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
    //         return false;
    //     }
    //     // var highestNumber = value1;
    //     // if (value2 > highestNumber) {
    //     //     highestNumber =value2;
    //     // }
    //     // if (value3 > highestNumber) {
    //     //     highestNumber =value3;
    //     // }
    //     // return highestNumber;
    //     return Math.max(value1, value2, value3); //use above or this line.
    // }
    //
    // // Solution #5
    // function parseNumber(value) {
    //     return parseFloat(value);
    // }
    //
    // // Solution #6
    // function add(value1, value2) {
    //     if (isANumber(value1) && isANumber(value2)) {
    //         return parseFloat(value1) + parseFloat(value2);
    //     } else {
    //         return false;
    //     }
    // }
    //
    // // Solution #7
    // function multiply(value1, value2) {
    //     if (isANumber(value1) && isANumber(value2)) {
    //         return parseFloat(value1) * parseFloat(value2);
    //     } else {
    //         return false;
    //     }
    // }
    //
    // // Solution #8
    // function square(value) {
    //     if (isANumber(value)) {
    //         return parseNumber(value) * parseNumber(value);
    //     }
    //     return false;
    // }
    //
    // // Solution #9
    // function sumOfSquares(value1, value2) {
    //     if (isANumber(value1) && isANumber(value2)) {
    //         return square(value1) + square(value2);
    //     }
    //     return false;
    // }
    // // Solution #10
    // function isPalindrome(input) {
    //     if (typeof input !== "string") {
    //         return false;
    //     }
    //     if (input.toLowerCase() === input.split('').reverse().join('')) {
    //         return true;
    //     }
    //     return false;
    // }

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract?url=http%3A%2F%2Fwww.melskitchencafe.com%2Fthe-best-fudgy-brownies%2F",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "faf8653d55msh655fdc5ed2b3d42p1c7eb7jsnc0bcfb418e93",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    let allRecipes = getAllRecipes()
    const recipe = {
        id: '',
        name: '',
        description: '',
        ingredients: []
    }

//Add ingredients to the recipe's ingredient array
    document.querySelector('#ingredient-form').addEventListener('submit', (e) => {
        e.preventDefault()
        addIngredient(e, recipe.ingredients);
        e.target.elements[0].value = ''
        renderIngredients(recipe.ingredients)
    })

//Retrieve recipe items, save to local storage, and redirect to home page
    document.querySelector('#add-recipe').addEventListener('click', () => {
        const recipeName = document.querySelector('#recipe-name')
        const recipeDescription = document.querySelector('#recipe-description')
        recipe.id = window.location.hash.substr(1)
        if (recipeName.value.length === 0){
            recipe.name = 'Unnamed Recipe'
        } else {
            recipe.name = recipeName.value
        }
        recipe.description = recipeDescription.value
        //push recipe to allRecipes
        allRecipes.push(recipe)
        //store allRecipes into local storage
        saveRecipes(allRecipes)
        //Redirect to home page
        window.location.assign('./index.html')
    })




















})();