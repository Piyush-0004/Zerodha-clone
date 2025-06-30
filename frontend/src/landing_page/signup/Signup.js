/*import React from 'react';

function SignUp() {
    return ( 
        <h1>SignUp</h1>
     );
}

export default SignUp;*/

import React, { useState } from 'react';

function SignUp() {
  const [isLogin, setIsLogin] = useState(true); // toggle mode
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const API_BASE = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'login' : 'signup';

    try {
      const res = await fetch(`${API_BASE}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok && isLogin) {
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
      } else if (res.ok) {
        alert('Signup successful! Please login.');
        setIsLogin(true);
      } else {
        alert(data.error || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      alert('Network error');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  /*const handleDashboardRedirect = () => {
    const token = localStorage.getItem('token');    //new
    window.location.href = 'http://localhost:3001?token=${token}'; // replace with your dashboard URL
  };*/

  const handleDashboardRedirect = () => {
    const token = localStorage.getItem('token');
    window.location.href = `https://zerodha-dashboard-ph0n.onrender.com?token=${token}`;
  };
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>

      {!loggedIn ? (
        <>
          <form onSubmit={handleSubmit} style={{ margin: '20px auto', maxWidth: '300px' }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
            />
            <button type="submit" style={{ padding: '10px 20px' }}>
              {isLogin ? 'Login' : 'Signup'}
            </button>
          </form>

          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button onClick={() => setIsLogin(!isLogin)} style={{ color: 'blue', border: 'none', background: 'none' }}>
              {isLogin ? 'Signup' : 'Login'}
            </button>
          </p>
        </>
      ) : (
        <>
          <p>✅ You are logged in!</p>
          <button onClick={handleDashboardRedirect} style={{ marginRight: '10px', padding: '10px 20px' }}>
            Go to Dashboard
          </button>
          <button onClick={handleLogout} style={{ padding: '10px 20px', background: 'red', color: 'white' }}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default SignUp;
