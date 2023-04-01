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

  //filtre pour afficher toutes les capacités de chambre
  const filtreCapacite = [...new Set(chambre.map((Val) => Val.capacite))];

  
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

          <div class="etoile">
            <h6>Étoiles</h6>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="1 etoile" id="defaultCheck1E"/>
              <label class="form-check-label" for="defaultCheck1E">1 étoile</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="2 etoile" id="defaultCheck2E"/>
              <label class="form-check-label" for="defaultCheck2E">2 étoile</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="3 etoile" id="defaultCheck3E"/>
              <label class="form-check-label" for="defaultCheck3E">3 étoile</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="4 etoile" id="defaultCheck4E"/>
              <label class="form-check-label" for="defaultCheck4E">4 étoile</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="5 etoile" id="defaultCheck5E"/>
              <label class="form-check-label" for="defaultCheck5E">5 étoile</label>
            </div>
          </div>

          <br />

          
          <Filtre setItem={setChambre} filtres={filtreCapacite}/>
          
        </div>
        
        <div class="col-sm">
        
          <Card chambre={chambre}/>

        </div>
      </div>
      
    </div>
  );
}
export default App;