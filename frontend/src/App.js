import { React, useState } from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import Logout from "./components/Logout";
import { Route, Routes } from "react-router-dom";

function App() {
  // set state for login
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <NavBar />
      {isLogin ? (
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/income" element={<Income />} />
          <Route exact path="/expenses" element={<Expenses />} />
          <Route
            exact
            path="/logout"
            element={<Logout setIsLogin={setIsLogin} />}
          />
        </Routes>
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;
