import React from "react";
import image1 from "../images/image1.jpg";

const Card = ({ chambre }) => {

  //rediriger vers la page de reservation
  function navigateToReservation() {
    //stock le num de la chambre
    window.location.href = "./Reservation";
  }

  //rediriger vers home
  function navigateToConnection() {
    window.location.href = "./Login";
  }


  function reserver (r){
    let co = sessionStorage.getItem("status");

    //si l'utilisateur est connecté, l'envoie a la page de reservation, sinon l'envoie a la page de connection
    if (co === "connecte"){      

      sessionStorage.removeItem("chambre");
      sessionStorage.setItem("chambre", JSON.stringify(r));
      
      //appele la fonction qui change de page
      navigateToReservation()
    }
    else if(co==="deconnecte"){
      navigateToConnection()
    }

  }

  return (
    <>
      
      {chambre.map((val) => (
        
        <div className="card " key={val.numchambre}>
          
          <div className="row g-0">
            <div className="col-md-3">
              <h1 className="text-center"> {val.nomhotel}</h1>
              <img
                src={image1}
                className="img-fluid rounded"
                alt="Chambre "
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h3 className="card-title">Description de la chambre</h3>
                <p className="card-text">
                  <span className="point1">
                    <b>Capacité de la chambre: </b>
                    {val.capacite}
                  </span>
                  <span className="point1">
                    <b>Les commoditées: </b>
                    {val.commodite}
                  </span>
                  <span>
                    <b>La vue: </b>
                    {val.vuechambre}
                  </span>
                  <span className="point1">
                    <b>Les inconvénients: </b>
                    {val.probleme}{" "}
                  </span>
                  <span className="point1">
                    <b>Possibilité d'augmenter la capacité de la chambre:</b>{" "}
                    {val.etendue}
                  </span>
                </p>
              </div>
            </div>
            <div className="pricecol col-2">
              <h5 className="price">
                Prix: <b>{val.prix}$</b>
              </h5>

              
              <button class="learn-more" onClick={()=>reserver(val)} >
              <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                  
              </span>
                <span class="button-text">Réserver</span>
              </button>
              
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
