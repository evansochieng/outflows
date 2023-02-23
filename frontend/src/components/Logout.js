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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px"
      }}
    >
      <div>
        <p>
          <span>Are you sure you want to log out?</span>
        </p>
        <p>
          You won't be able to track your expenditure man! You might waste
          yourself man!
          <ImSad style={{ color: "#fcd34d", fontSize: "50px" }} />
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          style={{
            width: "150px",
            backgroundColor: "#e96916",
            marginBottom: "20px",
          }}
          onClick={logoutUser}
        >
          LOG OUT
        </button>
        <button style={{ width: "150px" }} onClick={redirectHome}>
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default Logout