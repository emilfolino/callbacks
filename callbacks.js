"use strict";

(function() {
    var firstWeDo = function(callback) {
        console.log("First");
        setTimeout(function() {
            callback();
        }, 1000);
    };

    var thenWeDo = function() {
        console.log("Second");
    };

    firstWeDo(thenWeDo);
    console.log("After");
})();
