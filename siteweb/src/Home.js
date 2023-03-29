import React, {useEffect, useState } from 'react';
import Card from './Card';

function App() {
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
  
  //map permet d'afficher les info de la database sous forme de tableau
  return (
    <div class="container ">
      
      <h1>Bienvenu</h1>

      <br />
      <br />

      <div class="row">
        <div class="col-sm-2">
          <h5 class="border-dark">Filtrer par</h5>

          <div class="filter1">
            <h6>Étoiles</h6>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="1 etoile" id="defaultCheck1"/>
              <label class="form-check-label" for="defaultCheck1">1 étoile</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="2 etoile" id="defaultCheck2"/>
              <label class="form-check-label" for="defaultCheck2">2 étoile</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="3 etoile" id="defaultCheck3"/>
              <label class="form-check-label" for="defaultCheck3">3 étoile</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="4 etoile" id="defaultCheck4"/>
              <label class="form-check-label" for="defaultCheck4">4 étoile</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="5 etoile" id="defaultCheck2"/>
              <label class="form-check-label" for="defaultCheck5">5 étoile</label>
            </div>
          </div>

          <br />

          <div class="filter2">
            <h6>Capacité</h6>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="simple" id="defaultCheck1"/>
              <label class="form-check-label" for="defaultCheck1">1 personne</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="double" id="defaultCheck2"/>
              <label class="form-check-label" for="defaultCheck1">2 personnes</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="triple" id="defaultCheck3"/>
              <label class="form-check-label" for="flexCheckChecked">3 personnes</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="quadruple" id="defaultCheck3"/>
              <label class="form-check-label" for="flexCheckChecked">4 personnes</label>
            </div>
          </div>
          
        </div>
        
        <div class="col-sm">
        
          <Card chambre={chambre}/>

        </div>
      </div>
      
    </div>
  );
}
export default App;