const Pool = require('pg').Pool
const pool = new Pool({
    user:"postgres",
    password:"databasepass",
    host:"localhost",
    port: 5432,
    database: "postgres"
});

const getchaine = () => {
    return new Promise(function(resolve, reject) {
      pool.query('select * from hotels.chainehotel', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
}

module.exports = {
    getchaine,
}