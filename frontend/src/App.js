import React from 'react';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Logout from './components/Logout';
import { Route, Routes} from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/income" element={<Income />} />
        <Route exact path="/expenses" element={<Expenses />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
