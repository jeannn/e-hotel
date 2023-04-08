import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Login () {

  // permet le changement de page (vers la home page)
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/'; 
    navigate(path);
  }

  // obtient les informations de la table client
  const [clientPass, setclientPass] = useState([]);
  useEffect(() => {
    getClientPass();
  }, []);
  const getClientPass = async () => {
    try {
      const response = await fetch("http://localhost:8080");
      const jsonData = await response.json();
      setclientPass(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  // valeurs entrée par l'utilisateur sont stcké ici
  const [nomEntree,setNomEntree] = useState(''); 
  const [passEntree,setPassEntree] = useState(''); 

  const [verif,setVerif] = useState(''); 

  // obtient la longueur de la table clientPass
  let n = clientPass.length;


  // fonction appelée suite a la soumission du formulaire
  const handleSubmit = (e) => {

    // empeche la page de s'actualiser a chaque foie qu'on clique sur le boutton
    e.preventDefault();
    
    
    // la boucle parcour les lignes de la table client (clientPass) 
    for(let i=0;i<n;i++ ){

      //redirige vers la page d'acceuil si les information entrées sont bonne
      if(nomEntree==clientPass[i].nomcomplet){
        if(passEntree==clientPass[i].motdepasse){

          //efface les precedantes valeurs 
          sessionStorage.clear();
          // stock le compte pour pouvoir etre utilisé par les autres pages
          sessionStorage.setItem("compte", JSON.stringify(clientPass[i]));
          sessionStorage.setItem("connectee", "connecte");
          setVerif("")


          //appel la const routechange qui redirige vers la homepage
          routeChange();
          
        }
        else{
          setVerif("Nom d'utilisateur ou mot de passe incorrect")
        }
      }
      else{
          setVerif("Nom d'utilisateur ou mot de passe incorrect")
      }
    }
  }

  
  return (
    <div class="loginpage">
      
      <div class="pageheader">
        <h1>Connectez vous a votre compte</h1>
      </div>
      
      <div class="loginforms">
        <div class="formheader">
          <h4>Login</h4>
        </div>
        <form class="emailpwforms" onSubmit={handleSubmit}>
          <div class="emailForm form-group">
            <label for="exampleInputEmail1">NAS</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              onChange={(e)=>setNomEntree(e.target.value)}
              aria-describedby="emailHelp"
              placeholder="Entrer votre NAS"
            />
          </div>
          <div class="pwForm form-group">
            <label for="exampleInputPassword1">Mot de passe</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>setPassEntree(e.target.value)}
              placeholder="Mot de passe"
            />
          </div>

          <div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            <p className="text-danger">{verif}</p>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
