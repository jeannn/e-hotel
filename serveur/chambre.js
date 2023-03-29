const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'databasepass',
  port: 5432,
});

//selection le tableau chambre join au tableau hotel
const getChambre = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM chambre natural join hotel', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}
const getChaine = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM chainehotel', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}
const getChaineHotelChambre = () => {
  return new Promise (function(resolve,reject){
    pool.query('select * from chambre left join hotel on chambre.nomhotel = hotel.nomhotel left join chainehotel on chainehotel.nomchainehotel = hotel.nomchainehotel',(error,results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

  
  
  module.exports = {
    getChambre,getChaineHotelChambre,getChaine,
  }