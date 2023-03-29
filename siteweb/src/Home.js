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
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
              <label class="form-check-label" for="defaultCheck1">1 personne</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
              <label class="form-check-label" for="defaultCheck1">2 personnes</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>
              <label class="form-check-label" for="flexCheckChecked">3 personnes</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>
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

/* {chambre.map(chambre => (
            
            <div class="card border-dark mb-3">

              <div class="row g-0">
                <div class="col-md-2">
                  <h1> {chambre.nomhotel}</h1>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title"><b></b>Description de la chambre</h5>
                    <p class="card-text">Capacité de la chambre : lit {chambre.capacite}, 
                      <br />
                      La chambre posséde les commoditées suivantes: {chambre.commodite}
                      <br />
                      Cette chambre à aussi une {chambre.vuechambre}
                      <br />
                      Les problèmes concernant la chambre sont: {chambre.probleme}
                      <br />
                      Possibilité d'augmenter la capacité de la chambre: {chambre.etendue}
                    </p>
                    
                  </div>
                </div>
                <div className="col"><h5>Prix: <b>{chambre.prix}$</b></h5></div>
              </div>

            </div>

          ))} */