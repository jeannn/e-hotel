import React, {useEffect, useState } from 'react';
import Card from './Card';
import Filtre from './Filtre';

function App() {

  //récupération des données de chambre
  const [chambre, setChambre] = useState([]);
  useEffect(() => {
    getChambre();
  },[]);
  const getChambre = async () =>{
    try{
      const response = await fetch('http://localhost:3001')
      const jsonData = await response.json()
      setChambre(jsonData)
    }catch(err){
      console.log(err.message)
    }
  }

  //menu affichant toutes les capacités de chambre (nom des colonnes)
  const menuCapacite = [...new Set(chambre.map((Val) => Val.capacite))];

  //méthode de filtrage
  const filtrerCapacite = (curcat) => {
    const newItem = chambre.filter((newVal) => {
      return newVal.capacite === curcat; 
        	// comparer les categories pour afficher les données
    });
    setChambre(newItem);
  };

  //menu affichant toutes les capacités de chambre (nom des colonnes)
  const menuEtoile = [...new Set(chambre.map((Val) => Val.classement))];

  //méthode de filtrage
  const filtrerEtoile = (curcat) => {
    const newItem = chambre.filter((newVal) => {
      return newVal.classement === curcat; 
        	// comparer les categories pour afficher les données
    });
    setChambre(newItem);
  };

  
  //map permet d'afficher les info de la database sous forme de tableau
  // <filtre ..../> permet d'appeler le fichier filtre avec les valeurs spécifiés
  return (
    <div class="container ">
      
      <h1 className='text-center'>Bienvenu</h1>

      <br />
      <br />

      <div class="row">

        <div class="col-sm-2">
          <h5 class="border-dark">Filtrer par</h5>
          
          <h6>Étoiles</h6>
          <Filtre setItem={setChambre} menuFiltres={menuEtoile} filterItem={filtrerEtoile}/>
          <br />
          <h6>Capacité</h6>
          <Filtre setItem={setChambre} menuFiltres={menuCapacite} filterItem={filtrerCapacite}/>
          
        </div>
        
        <div class="col-sm">
        
          <Card chambre={chambre}/>

        </div>
      </div>
      
    </div>
  );
}
export default App;