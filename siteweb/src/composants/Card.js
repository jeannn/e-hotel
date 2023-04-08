import React from "react";

const Card = ({ chambre }) => {
  return (
    <>
      {chambre.map((val) => (
        <div className="card " key={val.numchambre}>
          <div className="row g-0">
            <div className="col-md-3">
              <h1 className="text-center"> {val.nomhotel}</h1>

              
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h3 className="card-title">Description de la chambre</h3>
                <p className="card-text">
                  <span className="point1">
                    <b>Capacité de la chambre : </b>
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
            <div className="pricecol col">
              <h5 className="price">
                Prix: <b>{val.prix}$</b>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
