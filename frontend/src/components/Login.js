import React from 'react';

const Login = () => {
  return (
    <div>
      <form style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', borderRadius: '10px', padding: '10px'}}>
        <h2>Login</h2>
        <input type="text" placeholder='Username' style={{marginTop: '5px'}}/>
        <br />
        <input type="text" placeholder='Password' style={{marginTop: '5px'}}/>
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;