import { useState,useEffect } from "react";

const Register = () => {

  
  const [nas_client,setNas_client] = useState(''); 
  const [numtelclient,setNumtelclient] = useState(''); 
  const [nomcomplet,setNomcomplet] = useState('');
  const [adressecourrielclient,setAdressecourrielclient] = useState('');
  const [motdepasse,setMotdepasse] = useState('');
  const [message,setMessage]=useState('');
  const [succe,setSucce]=useState('');

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
        setSucce('Compte crée avec succès')
        setMessage('')
      })
      
    }
    catch(err) {
      setMessage('Création de compte imposibble')
      setSucce('')
    }
  }


  return (
    <div>
      <div className="pageheader">
        <h1 className="text-center">Creation de compte </h1>
      </div>
        <br />
        <div className="row">
          
          <form onSubmit={handleSubmit}>
            
            <div className="row">
              <div className="col col-1"></div>
              <div className="col col-5">
                  <input
                  type="text"
                  id="name"
                  required
                  className="form-control form-control-lg"
                  value={nomcomplet}
                  onChange={(e)=>setNomcomplet(e.target.value)}
                  placeholder="John Doe"
                />
                <label className="form-label" for="name">
                  First and Last Name
                </label>
              </div>
              <div className="col col-5">
                  <input
                  type="number"
                  id="sinNumber"
                  required
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
              <div className="col col-1"></div>
              <div className="col col-5">
                  <input
                  type="tel"
                  required
                  className="form-control form-control-lg"
                  value={numtelclient}
                  onChange={(e)=>setNumtelclient(e.target.value)}
                  id="phoneNumber"
                />

                <label for="phoneNumber" className="form-label">
                  Phone Number
                </label>
              </div>
            

            
              <div className="col col-5">
                  <input
                  type="email"
                  id="emailAddress"
                  required
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
              <div className="col col-1"></div>
              <div className="col col-5">
                  <input
                  type="password"
                  id="password"
                  required
                  value={motdepasse}
                  onChange={(e)=>setMotdepasse(e.target.value)}
                  className="form-control form-control-lg"
                />
                <label className="form-label" for="password">
                  New Password
                </label>
              </div>
            </div>
            <div className="row">  
              <div className="col col-1"></div>      
              <div className="col col-5">
                <button className="btn btn-primary"> créer le compte</button>
                <p className="text-danger">{message}</p><p className="text-success">{succe}</p>
              </div>
              
            </div>
      
          </form>
        </div>
      </div>
    
  );
};

export default Register;