import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = ({ setIsLogin }) => {
  // create states for username and password
  const username = "evanso";
  const password = "testing321";
  const [credentials, setCredentials] = useState({
    userN: '',
    passW: ''
  });

  // capture input credentials
  const getCredentials = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }

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
      navigate("/");
    } else {
      alert("Username or password incorrect. Please try again.")
    }

    // reset the login form
    setCredentials({userN: '', passW: ''});
  }

  return (
    <div>
      <form
        onSubmit={(e) => loginUser(e)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          style={{ marginTop: "5px" }}
          name="userN"
          value={credentials.userN}
          onChange={(e) => getCredentials(e)}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          style={{ marginTop: "5px" }}
          value={credentials.passW}
          name="passW"
          onChange={(e) => getCredentials(e)}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;