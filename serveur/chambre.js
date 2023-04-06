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
const getEmploye = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM employe",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

const createChambre = (body) => {
  return new Promise(function(resolve, reject) {
    const { numchambre, nomhotel,capacite,commodite,vuechambre,etendue,probleme,prix } = body
    pool.query('INSERT INTO chambre (numchambre, nomhotel,capacite,commodite,vuechambre,etendue,probleme,prix) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', 
    [numchambre, nomhotel,capacite,commodite,vuechambre,etendue,probleme,prix], 
    (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Une nouvelle chambre a été ajouté`)
    })
  })
}
const createClient = (body) => {
  return new Promise(function(resolve, reject) {
    const { nas_client, numtelclient,nomcomplet,adressecourrielclient,motdepasse } = body

    pool.query('INSERT INTO client (nas_client, numtelclient,nomcomplet,adressecourrielclient,motdepasse) VALUES ($1, $2, $3, $4, $5) RETURNING *', 
    [nas_client, numtelclient,nomcomplet,adressecourrielclient,motdepasse], 
    (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Un nouvelle client a été créé`)
    })
  })
}

const deleteChambre = () => {
  return new Promise(function(resolve, reject) {
    const numchambre = parseInt(request.params.numchambre)
    pool.query('DELETE FROM chambre WHERE chambre.numchambre = $1 and hotel.nomhotel=$2', [numchambre,nomhotel], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`chambre ${numchambre} appartenant à ${nomhotel} à été éffacé`)
    })
  })
}
const deleteClient = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM client WHERE nas_client=$1', [nas_client], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Client possédant le nas: ${nas_client} a été effacé`)
    })
  })
}


module.exports = {
  getChambreHotel,
  getClients,
  getEmploye,
  createChambre,
  createClient,
  deleteChambre,
  deleteClient,
};
