import React from 'react';

const Card = ({chambre}) => {
    return(
        <>
            {chambre.map((val) => (
                <div class="card border-dark mb-3" key = {val.numchambre}>

                    <div class="row g-0">
                        <div class="col-md-3">
                            <h1> {val.nomhotel}</h1>
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title"><b></b>Description de la chambre</h5>
                                <p class="card-text">Capacité de la chambre : lit {val.capacite}, 
                                    <br />
                                    La chambre posséde les commoditées suivantes: {val.commodite}
                                    <br />
                                    Cette chambre à aussi une {val.vuechambre}
                                    <br />
                                    Les problèmes concernant la chambre sont: {val.probleme}
                                    <br />
                                    Possibilité d'augmenter la capacité de la chambre: {val.etendue}
                                </p>
                            
                            </div>
                        </div>
                        <div className="col"><h5>Prix: <b>{val.prix}$</b></h5></div>
                    </div>

                </div>
            ))}

        </>
    )
}
export default Card;