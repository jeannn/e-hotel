const Register = () => {
  return (
    <div class="registerpage">
      <div class="pageheader">
        <h1 class="text-center">Create your EZHotel now!</h1>
      </div>
      <div class="registerform">
        <section class="vh-100 gradient-custom">
          <div class="container py-5">
            <div class="row justify-content-center align-items-center h-100">
              <div class="col-12 col-lg-9 col-xl-7">
                <div
                  class="card shadow-2-strong card-registration"
                  style={{ borderradius: 15 }}>
                  <div class="card-body p-4 p-md-5">
                    <h3 class="text-center mb-4 pb-2 pb-md-0 mb-md-5">
                      Registration Form
                    </h3>
                    <form>
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="name"
                              class="form-control form-control-lg"
                              placeholder="John Doe"
                            />
                            <label class="form-label" for="name">
                              First and Last Name
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="number"
                              id="sinNumber"
                              class="form-control form-control-lg"
                              placeholder="XXXXXXXXX"
                            />
                            <label class="form-label" for="sinNumber">
                              SIN Number
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6 mb-4 d-flex align-items-center">
                          <div class="form-outline datepicker w-100">
                            <input
                              type="tel"
                              class="form-control form-control-lg"
                              id="phoneNumber"
                            />

                            <label for="phoneNumber" class="form-label">
                              Phone Number
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4 pb-2">
                          <div class="form-outline">
                            <input
                              type="email"
                              id="emailAddress"
                              class="form-control form-control-lg"
                            />
                            <label class="form-label" for="emailAddress">
                              Email
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6 mb-4 pb-2">
                          <div class="form-outline">
                            <input
                              type="password"
                              id="password"
                              class="form-control form-control-lg"
                            />
                            <label class="form-label" for="password">
                              New Password
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4 pb-2">
                          <div class="form-outline">
                            <input
                              type="tel"
                              id="reservationNumber"
                              class="form-control form-control-lg"
                            />
                            <label class="form-label" for="reservationNumber">
                              Reservation Number
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="row"></div>

                      <div class="mt-4 pt-2">
                        <input
                          class="btn btn-primary btn-lg"
                          type="submit"
                          value="Submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
