import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


const Navbar = () => {
    return ( 
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#"><b>E-Hotel</b></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active text-light" aria-current="page" href="index.html">Acceuil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="login.html">Ouvrir une session</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;