import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Navbar = () => {

  function deco (){

    //efface le compte connecté du stockage et change le status connecte a deconnecté
    sessionStorage.clear();
    sessionStorage.setItem("connectee", "deconnecte");

  }
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">
          <b>E-Hotel</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/">
                Acceuil
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light" href="/Login">
                Se connecter
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light" href="/Register">
                S'inscrire
              </a>
            </li>
            <li className="nav-item">
              
              <a className="nav-link text-light" href="/" onClick={deco}>
                Deconnexion
              </a>

              
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
