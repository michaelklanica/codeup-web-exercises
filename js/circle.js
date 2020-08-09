(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            var circleArea = Math.PI * (Math.pow(this.radius, 2));    // hint: area = pi * radius^2

            return circleArea; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            var area;
            if (doRounding) {
                area = Math.round(this.getArea());
            } else {
                area = this.getArea();
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.area);

        }
    };

    // log info about the circle
    console.log("Raw circle information " + circle.getArea());
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number " + circle.logInfo());
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information " + circle.getArea());
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number "  + circle.logInfo());
    circle.logInfo(true);
})();
