import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../../Pages/home/home'; 
import './signup.css';

const SignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [activeTab, setActiveTab] = useState('signup');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!agreedToTerms) {
      alert('Please agree to Terms & Conditions');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://ecomerceapis.runasp.net/api/Users/Signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful! You can now login.');
        setActiveTab('login');
        setFormData({ fullName: '', email: '', password: '', phoneNumber: '' });
        setAgreedToTerms(false);
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      alert('Signup error: ' + error.message);
    }

    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!agreedToTerms) {
      alert('Please agree to Terms & Conditions');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://ecomerceapis.runasp.net/api/Users/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok && data.data) {
        alert('Login successful!');
        localStorage.setItem('token', data.data);
        navigate('/home');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('Login error: ' + error.message);
    }

    setLoading(false);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="page-wrapper">
      <Home />
      <div className="overlay">
        <div className="signup-container">
          <div className="signup-card">
            <div className="tab-header">
              <div
                className={`tab ${activeTab === 'login' ? 'active' : 'inactive'}`}
                onClick={() => setActiveTab('login')}
              >
                Log in
              </div>
              <div
                className={`tab ${activeTab === 'signup' ? 'active' : 'inactive'}`}
                onClick={() => setActiveTab('signup')}
              >
                Create Account
              </div>
            </div>

            <div className="form-content">
              {activeTab === 'signup' ? (
                <>
                  <h2>Create your account</h2>
                  <form onSubmit={handleSignup}>
                    <div className="input-group">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="input-group password-group">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                      <button type="button" className="password-toggle" onClick={togglePassword}>
                        {showPassword ? 'Hide' : 'Show'}
                      </button>
                    </div>
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                      />
                      <label htmlFor="terms">
                        I agree to all <a href="#">Terms & Conditions</a>
                      </label>
                    </div>
                    <button type="submit" className="create-btn" disabled={loading}>
                      {loading ? 'Signing up...' : 'Create Account'}
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <h2>Log in to Tech Heim</h2>
                  <form onSubmit={handleLogin}>
                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="input-group password-group">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                      <button type="button" className="password-toggle" onClick={togglePassword}>
                        {showPassword ? 'Hide' : 'Show'}
                      </button>
                    </div>
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="terms-login"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                      />
                      <label htmlFor="terms-login">
                        Keep me logged in <a href="#">Forgot Password?</a>
                      </label>
                    </div>
                    <button type="submit" className="create-btn" disabled={loading}>
                      {loading ? 'Logging in...' : 'Log In'}
                    </button>
                  </form>
                </>
              )}

              <div className="divider">Or Sign Up with</div>

              <div className="social-buttons">
                <button className="social-btn google-btn" onClick={() => alert('Google signup clicked!')}>
                  Google
                </button>
                <button className="social-btn facebook-btn" onClick={() => alert('Facebook signup clicked!')}>
                  Facebook
                </button>
              </div>

              <div className="login-link">
                {activeTab === 'signup' ? (
                  <>Already have an account?{' '}
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('login'); }}>
                      Sign in
                    </a>
                  </>
                ) : (
                  <>Don't have an account?{' '}
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('signup'); }}>
                      Create account
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

