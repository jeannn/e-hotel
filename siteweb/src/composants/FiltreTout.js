import React from "react";
import { useState,useEffect } from "react";

const FiltreTout = ({setItem}) =>{
    const [ChambreHotel, setChambreHotel] = useState([]);
    useEffect(() => {
        getChambreHotel();
    },[]);
    const getChambreHotel = async () =>{
        try{
        const response = await fetch('http://localhost:3001')
        const jsonData = await response.json()
        setChambreHotel(jsonData)
        }catch(err){
        console.log(err.message)
        }
    }
    
    //affiche tout les filtres
    return (
        <>

            <button className="btn-light text-dark btn-sm btn fw-bold" onClick={() => setItem(ChambreHotel)}>
              Tous
            </button>
          
        </>
    )
}
export default FiltreTout;