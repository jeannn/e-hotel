import { useState } from "react";

const Reservation = () => {
  
  //recupération de la chambre 
  let x = sessionStorage.getItem("chambre");
  let chambres = JSON.parse(x)

  //recupération du client
  let y = sessionStorage.getItem("compte");
  let clients = JSON.parse(y);

  const [date,setdate]=useState('');
  const [client,setClient]=useState('');
  const [chambre,setChambre]=useState('');

     

  const soumettre = async e =>{
    
    setChambre(chambres.numchambre);
    setClient(clients.nas_client)
    const reservation = {chambre,date,client}
    try {
    const response = await fetch('http://localhost:44349/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation),
    }).then(() => {
        alert("oui")
      })
      
    }
    catch(err) {
      alert(err)
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
                placeholder={chambres.nomhotel}
                disabled
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">ID Reservation</label>
              <input
                type="number"
                className="form-control disabled"
                id="exampleFormControlInput1"
                placeholder={chambres.numchambre}
                
                disabled
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">NAS</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder={clients.nas_client}
                disabled
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">Numéro de téléphone</label>
              <input
                type="tel"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder={clients.numtelclient}
                disabled
              />
            </div>
                        
            <div className="inputdivs">
              <label for="exampleFormControlInput1">Type de chambre</label>
              <input
                type="text"
                className="form-control disabled"
                id="exampleFormControlInput1"
                placeholder={chambres.capacite}
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
                placeholder={chambres.prix+"$"}
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
