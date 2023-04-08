const Reservation = () => {
  function generateRandomID() {
    const digits = "0123456789";
    let id = "";

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      id += digits[randomIndex];
    }

    return id;
  }

  return (
    <div className="reservepage">
      <div className="reservForm">
        <h1 className="reservtitle text-center">Réservez votre chambre</h1>
        <form action="" className="form">
          <div className="reserveformgroup form-group">
            <div className="inputdivs">
              <label for="exampleFormControlInput1">Nom d'hôtel</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Nom d'hôtel"
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">ID Reservation</label>
              <input
                type="number"
                className="form-control disabled"
                id="exampleFormControlInput1"
                placeholder={generateRandomID()}
                disabled
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">NAS</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="XXXXXXXXX"
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">Numéro de téléphone</label>
              <input
                type="tel"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="(XXX) XXX-XXXX"
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">Date d'arrivée</label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Date d'arrivée"
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">Type de chambre</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Type de chambre"
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">Nombre de nuits</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Nombre de nuits"
              />
            </div>

            <div className="inputdivs">
              <label for="exampleFormControlInput1">Prix total</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Prix total"
              />
            </div>
            <div>
              <button type="submit" class="btn btn-primary">
                Réserver
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
