import React from 'react'
import { useNavigate } from 'react-router'
import { ImSad } from 'react-icons/im'

const Logout = ({ setIsLogin }) => {

  // define navigation variable
  const navigate = useNavigate();

  // define a function to handle logout
  const logoutUser = () => {
    setIsLogin(false);
    alert("You were logged out successfully!");
    navigate("/");
  };

  // define function to redirect user to home
  const redirectHome = () => {
    navigate("/home")
  }

  return (
    <div>
      {/* new logout */}
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign out</h3>

                  <div>
                    <p className='mb-5'>
                      <span>Are you sure you want to log out?</span>
                    </p>
                    <p>
                      You won't be able to track your expenditure man! You might
                      waste your money!
                      <ImSad style={{ color: "#fcd34d", fontSize: "50px" }} />
                    </p>
                  </div>

                  <hr className="my-4" />

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    style={{ marginBottom: "20px" }}
                    onClick={logoutUser}
                  >
                    LOG OUT
                  </button>

                  <br />

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={redirectHome}
                  >
                    CANCEL
                  </button>

                  <hr className="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Logout