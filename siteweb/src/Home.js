import React, {useEffect, useState } from 'react';

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
          <h5>Filtrer par</h5>

          <div>
            <h6>Filtrer 1</h6>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">option 1 filtre 1</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
              <label class="form-check-label" for="flexCheckChecked">option 2 filtre 1</label>
            </div>
          </div>
          
        </div>

        <div class="col-sm">
          
          {chambre.map(chambre => (
            
            <div class="card border-dark mb-3">

              <div class="row g-0">
                <div class="col-md-4">
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
                    <div className="row">
                      <div className="col"></div>
                      <div className="col"><h5>Prix: <b>{chambre.prix}$</b></h5></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          ))}

        </div>
      </div>
      
    </div>
  );
}
export default App;