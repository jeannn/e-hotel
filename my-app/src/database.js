//test de connection a postgresSQL
const { Chaine } = require('pg');

const chaine = new Chaine({
    host: "localhost",
    port: 5432,
    user: "postgres",
    pass: "databasepass",
    database: "hotel.chainehotel"
})

chaine.connect();

chaine.query('select * from')