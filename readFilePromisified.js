"use strict";

module.exports = {
    readFile: function(filename) {
        const fs = require("fs");

        return new Promise((resolve, reject) => {
            fs.readFile(filename, "utf8", (error, text) => {
                if (error) {
                    reject(error.message);
                    return;
                }

                resolve(text);
            });
        });
    }
};
