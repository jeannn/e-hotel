import React from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";

const Card = ({ chambre }) => {
  //Fonction JS pour rediriger vers la page de reservation
  function navigateToOtherPage() {
    window.location.href = "./Reservation";
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
                alt="Room Image"
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

              <button class="learn-more" onClick={navigateToOtherPage}>
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
