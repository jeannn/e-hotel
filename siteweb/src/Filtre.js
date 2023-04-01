import React from "react";
import { useState,useEffect } from "react";

const Filtre = ({filterItem,setItem, menuFiltres}) =>{
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
    
    //menufiltre.map affiche le contenu de la colonne selectionné de la database
    return (
        <>
          <div>
                
            <button className="btn-light text-dark btn-sm btn fw-bold" onClick={() => setItem(chambre)}>
              Tous
            </button>
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