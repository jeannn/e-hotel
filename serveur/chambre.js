const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "databasepass",
  port: 5432,
});

//selection le tableau chambre join au tableau hotel
const getChambreHotel = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM chambre natural join hotel order by classement",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};
const getClients = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM client left join reservation on client.nas_client = reservation.nas_client left join locations on client.nas_client = locations.nas_client",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};
const getChaineHotelChambre = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "select * from chambre left join hotel on chambre.nomhotel = hotel.nomhotel left join chainehotel on chainehotel.nomchainehotel = hotel.nomchainehotel",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

module.exports = {
  getChambreHotel,
  getChaineHotelChambre,
  getClients,
};
