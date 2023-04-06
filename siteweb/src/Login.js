const Login = () => {
  return (
    <div class="loginpage">
      <div class="pageheader">
        <h1>Connectez vous a votre compte</h1>
      </div>

      <div class="loginforms">
        <div class="formheader">
          <h4>Login</h4>
        </div>
        <form class="emailpwforms">
          <div class="emailForm form-group">
            <label for="exampleInputEmail1">NAS</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
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
