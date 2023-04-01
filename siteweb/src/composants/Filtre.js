import React from "react";

const Filtre = ({filterItem, menuFiltres}) =>{
        
    //menufiltre.map affiche le contenu de la colonne selectionné de la database
    //filterItem se charge de filter selon le boutton cliqué
    return (
        <>
          <div>
                
            {menuFiltres.map((Val, id) => {
              return (
                <div>
                  <button className="btn-light text-dark btn-sm btn fw-bold"onClick={() => filterItem(Val)} key={id}>
                    {Val}
                    <br />
                  </button>
                </div>   
              );
            })}
              
          </div>
        </>
    )
}
export default Filtre;