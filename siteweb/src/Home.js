import React, { useEffect, useState } from "react";
import Card from "./composants/Card";
import Filtre from "./composants/Filtre";
import FiltreTout from "./composants/FiltreTout";

function Home() {

  //recupère le compte du stockage
  let co = sessionStorage.getItem("connectee");
  let nom="";
  
  if (co==="connecte"){
    let x = sessionStorage.getItem("compte");
    let compte = JSON.parse(x);
    nom = compte.nomcomplet
  }else{
    nom = ""
  }

  //récupération des données de chambre
  const [chambreHotel, setChambreHotel] = useState([]);
  useEffect(() => {
    getChambreHotel();
  }, []);
  const getChambreHotel = async () => {
    try {
      const response = await fetch("http://localhost:3001");
      const jsonData = await response.json();
      setChambreHotel(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  /* 
  Début methode filtrage 
  */
  //menu affichant toutes les categories d'hotel
  const menuEtoile = [...new Set(chambreHotel.map((Val) => Val.classement))];

  //méthode de filtrage categories d'hotel
  const filtrerEtoile = (curcat) => {
    const newItem = chambreHotel.filter((newVal) => {
      return newVal.classement === curcat;
      // comparer les categories pour afficher les données
    });
    setChambreHotel(newItem);
  };

  //menu affichant tout les nombre de chambre dans l'hotel
  const menuNombre = [...new Set(chambreHotel.map((Val) => Val.nombrechambre))];

  //méthode de filtrage nombre chambre
  const filtrerNombre = (curcat) => {
    const newItem = chambreHotel.filter((newVal) => {
      return newVal.nombrechambre === curcat;
      // comparer les nombre chambre pour afficher les données
    });
    setChambreHotel(newItem);
  };

  //menu affichant tout les chaine hotelière
  const menuChaine = [
    ...new Set(chambreHotel.map((Val) => Val.nomchainehotel)),
  ];

  //méthode de filtrage chaine
  const filtrerChaine = (curcat) => {
    const newItem = chambreHotel.filter((newVal) => {
      return newVal.nomchainehotel === curcat;
      // comparer les chaines pour afficher les données
    });
    setChambreHotel(newItem);
  };

  //menu affichant tout les hotel
  const menuHotel = [...new Set(chambreHotel.map((Val) => Val.nomhotel))];

  //méthode de filtrage hotel
  const filtrerHotel = (curcat) => {
    const newItem = chambreHotel.filter((newVal) => {
      return newVal.nomhotel === curcat;
      // comparer les nom d'hotel pour afficher les données
    });
    setChambreHotel(newItem);
  };

  //menu affichant tout les capacité chambre
  const menuCapacite = [...new Set(chambreHotel.map((Val) => Val.capacite))];

  //méthode de filtrage capacité
  const filtrerCapacite = (curcat) => {
    const newItem = chambreHotel.filter((newVal) => {
      return newVal.capacite === curcat;
    });
    setChambreHotel(newItem);
  };
  //menu affichant tout les prix
  const menuPrix = [...new Set(chambreHotel.map((Val) => Val.prix))];

  //méthode de filtrage prix
  const filtrerPrix = (curcat) => {
    const newItem = chambreHotel.filter((newVal) => {
      return newVal.prix === curcat;
    });
    setChambreHotel(newItem);
  };
  /* 
  fin methode filtrage 
  */

  //map permet d'afficher les info de la database sous forme de tableau
  // <filtre ..../> permet d'appeler le fichier filtre avec les valeurs spécifiés
  return (
    <div class="container ">
      <h1 className="hometext text-center">
        Bienvenu sur Le site de reservation de chambre {nom}
      </h1>

      <br />
      <br />

      <div class="row">
        <div class="filterCol col-sm-2">
          <h4>Filtrer par</h4>

          <h6>Tous</h6>
          <FiltreTout setItem={setChambreHotel} />

          <h5>
            <br />
            Les Hotels <br /> 
          </h5>
          <h6>
            <br />
            Chaine Hotelière
          </h6>
          <Filtre menuFiltres={menuChaine} filterItem={filtrerChaine} />

          <h6>
            {" "}
            <br /> Étoile
          </h6>
          <Filtre menuFiltres={menuEtoile} filterItem={filtrerEtoile} />

          <h6>
            {" "}
            <br /> Hotels
          </h6>
          <Filtre menuFiltres={menuHotel} filterItem={filtrerHotel} />

          <h6>
            <br />
            Nombre de chambres dans l'hotel
          </h6>
          <Filtre menuFiltres={menuNombre} filterItem={filtrerNombre} />

          <h5>
            <br />
            Les Chambres <br />
          </h5>

          <h6>
            <br />
            Capacité de la chambre
          </h6>
          <Filtre menuFiltres={menuCapacite} filterItem={filtrerCapacite} />

          <h6>
            <br />
            Liste des prix
          </h6>
          <Filtre menuFiltres={menuPrix} filterItem={filtrerPrix} />
        </div>

        <div class="col-sm">
          <Card chambre={chambreHotel} />
        </div>
      </div>
    </div>
  );
}
export default Home;
