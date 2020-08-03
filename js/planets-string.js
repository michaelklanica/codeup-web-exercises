(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


    // var planets = planetsArray.join('<br>');
    // console.log(planets);

    var planetsArray2 = [];
    planetsArray.forEach(function(planet) {
        planetsArray2.push('<li>' + planet + '</li>');
    });
    // planetsArray2.unshift('<ul>');
    // planetsArray2.push('</ul>');
    planetsString = planetsArray2.join("");
    planetsString = '<ul>' + planetsString + '</ul>';
    console.log(planetsString);


    document.write(planetsString);

})();
