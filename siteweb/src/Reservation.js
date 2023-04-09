import { useState } from "react";

const Reservation = () => {
  
  //recupération de la chambre 
  let x = sessionStorage.getItem("chambre");
  let chambre = JSON.parse(x)

  //recupération du client
  let y = sessionStorage.getItem("compte");
  let client = JSON.parse(y);

  const [date,setdate]=useState('');

  

  const soumettre = async e =>{
    
    let a = chambre.numchambre;
    let b = date;
    let c = client.nas_client;
    let reservation = {a,b,c}
    alert(reservation.c)
    try {
    const response = await fetch('http://localhost:8081/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation),
    })
      .then(() => {
        // setSucce('Compte crée avec succès')
        // setMessage('')
        console.log(response);
      })
      
    }
    catch(err) {
      // setMessage('Création de compte imposibble')
      // setSucce('')
    }
  }
  


  return (
    <div className="reservepage">
      <div className="reservForm">
        <h1 className="reservtitle text-center">Réservez votre chambre</h1>
        <form action="" className="form" onSubmit={soumettre}>
          <div className="reserveformgroup form-group">
            <div className="inputdivs">
              <label for="exampleFormControlInput1">Nom d'hôtel</label>
              <input
                type="text"
                className="form-control disabled"
                id="exampleFormControlInput1"
                placeholder={chambre.nomhotel}
                disabled
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">ID Reservation</label>
              <input
                type="number"
                className="form-control disabled"
                id="exampleFormControlInput1"
                placeholder={chambre.numchambre}
                disabled
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">NAS</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder={client.nas_client}
                disabled
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">Numéro de téléphone</label>
              <input
                type="tel"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder={client.numtelclient}
                disabled
              />
            </div>
                        
            <div className="inputdivs">
              <label for="exampleFormControlInput1">Type de chambre</label>
              <input
                type="text"
                className="form-control disabled"
                id="exampleFormControlInput1"
                placeholder={chambre.capacite}
                disabled
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">Nombre de nuits</label>
              <input
                type="number"
                className="form-control disabled"
                id="exampleFormControlInput1"
                placeholder="1"
                disabled
              />
            </div>
                                    
            <div className="inputdivs">
              <label for="exampleFormControlInput1">Choisir une date</label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                // la fonction onchange met a jour la valeur de la variable date chaque foie qu'elle change
                onChange={(e)=>setdate(e.target.value)}
                placeholder="Date d'arrivée"
                required
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">Prix total</label>
              <input
                type="text"
                className="form-control disabled"
                id="exampleFormControlInput1"
                placeholder={chambre.prix+"$"}
                disabled
              />
            </div>
                        
            <div>
              <button type="submit" class="btn btn-primary">
                Réserver
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
