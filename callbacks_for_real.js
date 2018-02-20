"use strict";

(function() {
    const fs = require('fs');

    fs.readFile("callbacks.js", "utf8", (error, text) => {
        if (error) {
            console.log(error.message);
            return;
        }

        console.log(text);
    });

    console.log("Is this before?");
})();
