import { useState,useEffect } from "react";

const Login = () => {

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

  const [nomEntree,setNomEntree] = useState(''); 
  const [passEntree,setPassEntree] = useState(''); 
  let n = clientPass.length;


  const handleSubmit = (e) => {
    e.preventDefault();
    let retour = false
    
    for(let i=0;i<n;i++ ){
      if(nomEntree==clientPass[i].nomcomplet){
        if(passEntree==clientPass[i].motdepasse){
          retour = true

          // envoie le compte a l'autre page 
          sessionStorage.setItem("compte", JSON.stringify(clientPass));
          

        }
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
            <label for="exampleInputEmail1">Nom Complet</label>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
