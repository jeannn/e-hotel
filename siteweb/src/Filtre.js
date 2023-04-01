import React from "react";
import { useState,useEffect } from "react";

const Filtre = ({setItem, filtres}) =>{
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
    
    return (
        <>
            <div class="capacite">
            <h6>Capacité</h6>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="simple" id="defaultCheck1C"/>
              <label class="form-check-label" for="defaultCheck1C">1 personne</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="double" id="defaultCheck2C"/>
              <label class="form-check-label" for="defaultCheck2C">2 personnes</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="triple" id="defaultCheck3C"/>
              <label class="form-check-label" for="defaultCheck3C">3 personnes</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="quadruple" id="defaultCheck4C"/>
              <label class="form-check-label" for="defaultCheck4C">4 personnes</label>
            </div>
          </div>
        </>
    )
}
export default Filtre;