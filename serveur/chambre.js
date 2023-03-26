const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'databasepass',
  port: 5432,
});

const getChambre = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM chambre', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  
  
  module.exports = {
    getChambre,
  }