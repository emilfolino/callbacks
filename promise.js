"use strict";

(async function() {
    const readFilePromisified = require("./readFilePromisified.js");

    readFilePromisified.readFile("callbacks.js")
    .then((text) => console.log(text))
    .catch((error) => console.log(error));

    readFilePromisified.readFile("callbacks_for_real.js")
    .then((text) => console.log(text))
    .catch((error) => console.log(error));

    Promise.all([
        readFilePromisified.readFile("callbacks.js"),
        readFilePromisified.readFile("callbacks_for_real.js")
    ])
    .then((texts) => texts.map((text) => console.log(text)))
    .catch((error) => console.log(error));

    let text = await readFilePromisified.readFile("readFilePromisified.js");
    console.log(text);
})();
