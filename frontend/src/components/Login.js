import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ setIsLogin }) => {
  // create states for username and password
  const username = "evanso";
  const password = "testing321";
  const [credentials, setCredentials] = useState({
    userN: "",
    passW: "",
  });

  // capture input credentials
  const getCredentials = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // define navigation variable
  const navigate = useNavigate();

  // redirect user if credentials are okay
  const loginUser = (e) => {
    e.preventDefault();
    // if credentials match then navigate user to home page
    if (credentials.userN === username && credentials.passW === password) {
      // navigate user to home page
      setIsLogin(true);
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Username or password incorrect. Please try again.");
    }

    // reset the login form
    setCredentials({ userN: "", passW: "" });
  };

  return (
    <div>
      <form
        onSubmit={(e) => loginUser(e)}
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   flexDirection: "column",
        //   height: "100vh",
        //   borderRadius: "10px",
        //   padding: "10px",
        // }}
      >
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card shadow-2-strong"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">Sign in</h3>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="userN"
                        value={credentials.userN}
                        onChange={(e) => getCredentials(e)}
                      />
                      <label className="form-label" htmlFor="userN">
                        Username
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        value={credentials.passW}
                        name="passW"
                        onChange={(e) => getCredentials(e)}
                      />
                      <label className="form-label" htmlFor="passW">
                        Password
                      </label>
                    </div>

                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        {" "}
                        Remember password{" "}
                      </label>
                    </div>

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>

                    <hr className="my-4" />

                    <a
                      href="#!"
                      className="small text-muted"
                      style={{ marginRight: "20px" }}
                    >
                      Terms of use.
                    </a>
                    <a href="#!" className="small text-muted">
                      Privacy policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Login;
