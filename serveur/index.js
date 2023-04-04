const express = require("express");
const dataChambre = express();
const dataClient = express();
const port3001 = 3001;
const port8080 = 8080;

const chambre = require("./chambre");

/* affichage de la table chambre fusionné avec hotel sur le port 3001*/
dataChambre.use(express.json());
dataChambre.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});
dataChambre.get("/", (req, res) => {
  chambre
    .getChambreHotel()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
dataChambre.listen(port3001, () => {
  console.log(`App running on port ${port3001}.`);
});


/* affichage de la table client fusionné avec reservation et location sur le port 8080*/
dataClient.use(express.json());
dataClient.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});
dataClient.get("/", (req, res) => {
  chambre
    .getClients()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
dataClient.listen(port8080, () => {
  console.log(`App running on port ${port8080}.`);
});




/*template pour inserer et delete
  app.post('/merchants', (req, res) => {
  merchant_model.createMerchant(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/merchants/:id', (req, res) => {
  merchant_model.deleteMerchant(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})*/





