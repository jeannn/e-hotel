import { useState,useEffect } from "react";

const Register = () => {

  
  const [nas_client,setNas_client] = useState(''); 
  const [numtelclient,setNumtelclient] = useState(''); 
  const [nomcomplet,setNomcomplet] = useState('');
  const [adressecourrielclient,setAdressecourrielclient] = useState('');
  const [motdepasse,setMotdepasse] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const client = {nas_client,numtelclient,nomcomplet,adressecourrielclient,motdepasse};
    try {
    const response = await fetch('http://localhost:8080/client', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(client),
    })
      .then(() => {
        return response.text();
      })
      .then(data => {
        alert(data);
        
      });
    }
    catch(err) {
      alert(err.message);
    }
  }


  return (
    <div>
      <div className="pageheader">
        <h1 className="text-center">Creation de compte</h1>
      </div>
      <form onSubmit={handleSubmit}>
        
        <div className="row">
          <div className="col">
              <input
              type="text"
              id="name"
              className="form-control form-control-lg"
              value={nomcomplet}
              onChange={(e)=>setNomcomplet(e.target.value)}
              placeholder="John Doe"
            />
            <label className="form-label" for="name">
              First and Last Name
            </label>
          </div>
          <div className="col">
              <input
              type="number"
              id="sinNumber"
              value={nas_client}
              onChange={(e)=>setNas_client(e.target.value)}
              className="form-control form-control-lg"
              placeholder="XXXXXXXXX"
            />
            <label className="form-label" for="sinNumber">
              SIN Number
            </label>
          </div>
        </div>
      
        <div className="row">
          <div className="col">
              <input
              type="tel"
              className="form-control form-control-lg"
              value={numtelclient}
              onChange={(e)=>setNumtelclient(e.target.value)}
              id="phoneNumber"
            />

            <label for="phoneNumber" className="form-label">
              Phone Number
            </label>
          </div>
        

        
          <div className="col">
              <input
              type="email"
              id="emailAddress"
              value={adressecourrielclient}
              onChange={(e)=>setAdressecourrielclient(e.target.value)}
              className="form-control form-control-lg"
            />
            <label className="form-label" for="emailAddress">
              Email
            </label>
          </div>
        
          </div>
        <div className="row">
          <div className="col col-6">
              <input
              type="password"
              id="password"
              value={motdepasse}
              onChange={(e)=>setMotdepasse(e.target.value)}
              className="form-control form-control-lg"
            />
            <label className="form-label" for="password">
              New Password
            </label>
          </div>
        </div>        

    <button className="btn btn-primary btn-lg"> créer le compte</button>
    <p>{nomcomplet}</p>
   
      </form>
      
    </div>
  );
};

export default Register;