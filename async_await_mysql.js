(async function() {
    const mysql  = require("promise-mysql");
    const config = require("./config.json");
    const db     = await mysql.createConnection(config);

    let results = await db.query('SELECT * FROM larare');

    results.map((teacher) => console.log(teacher.fornamn + " " + teacher.efternamn));

    db.end();
})();
