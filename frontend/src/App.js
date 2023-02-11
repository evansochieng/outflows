import React from 'react';
import Login from './components/Login';
import NavBar from './components/NavBar';
import { Route, Routes} from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
    </div>
  );
}

export default App;
