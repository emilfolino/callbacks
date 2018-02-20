"use strict";

(function() {
    const mysql = require("promise-mysql");
    const config = require("./config.json");

    mysql.createConnection(config)
    .then((connection) => {
        connection.query('SELECT * FROM larare')
        .then((results) => results.map((teacher) => {
            console.log(teacher.fornamn + " " + teacher.efternamn)
        }))
        .catch((error) => console.log(error.message));

        connection.end();
    });
})();
