import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Added role state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role:', role);
    // Navigate to the next page based on role
    if (role === 'candidate') {
      navigate('/test'); // Redirect to TestPage for candidates
    } else if (role === 'expert') {
      navigate('/expert-dashboard'); // Example route for experts, adjust as necessary
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-header">Login</h1>
        <div className="role-selection">
          <button onClick={() => setRole('expert')} className="role-button">Login as Expert</button>
          <button onClick={() => setRole('candidate')} className="role-button">Login as Candidate</button>
        </div>
        {role && (
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label style={{
          color: 'white',
        }}
              htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label style={{
          color: 'white',
        }}
               htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        )}
        {!role && <p
        style={{
          color: 'white',
        }}
        >Please select a role to log in.</p>}
      </div>
    </div>
  );
}

export default LoginPage;
