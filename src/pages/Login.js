import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config"; // Firebase configuration file
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    try {
      // Firebase login logic
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      // alert("Login successful!");

      // Navigate to the dashboard or home page
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during login:", error.message);
      alert(error.message);
    }
  };

  return (
    <>
      <button className="back" onClick={() => navigate('/')}>
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
          <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
        </svg>
        {/* <span>Back</span> */}
      </button>

<div className="main-container">
  

  <div className="login-container">
    <div className="login-content">
      <div className="logos"> AppaTrack</div>
      <h2>Welcome Back</h2>

      <form onSubmit={handleSubmit}>
        <div className="start">
          <label htmlFor="email" className="form-labels">Email</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="start">
          <label htmlFor="password" className="form-labels">Password</label>
          <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required />
        </div>
        {/* <div className="end">
          <Link to="/forgot-password" className="text-small">Forgot password?</Link>
        </div> */}
        <button type="submit" className="button btn-primary">Login</button>
      </form>

      {/* <div className="center">or</div> */}
      {/* <button className="button btn-outline-secondary">
        <img src="../assests/google.png" className="social-logo" alt="Google Logo" /> Continue with Google
      </button>
      <button className="button btn-outline-secondary">
        <img src="../assests/facebook.png" className="social-logo" alt="Facebook Logo" /> Continue with Facebook
      </button>
      <button className="button btn-outline-secondary">
        <img src="../assests/apple-logo.png" className="social-logo" alt="Apple Logo" /> Continue with Apple
      </button> */}
      <div className="final">
        New here? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Login;