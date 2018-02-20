"use strict";

(function() {
    const mysql = require("mysql");
    const config = require("./config.json");

    var connection = mysql.createConnection(config);

    connection.connect();

    connection.query('SELECT * FROM larare', function (error, results, fields) {
        if (error) {
            throw error;
        }

        results.map((teacher) => console.log(teacher.fornamn + " " + teacher.efternamn));
    });

    connection.end();
})();
