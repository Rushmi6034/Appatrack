import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config"; // Import Firebase auth
import '../styles/Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const username = e.target.username.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const confirmPassword = e.target.confirm_password.value.trim();

    // Validation logic
    if (!/^[a-zA-Z]+$/.test(username)) {
      alert("Username should contain letters only.");
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      alert("Email should be a valid Gmail address (e.g., example@gmail.com).");
      return;
    }

    // const passwordRegex = /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    // if (!passwordRegex.test(password)) {
    //   alert("Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character.");
    //   return;
    // }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Firebase signup logic
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user);
      alert("Signup successful!");

      // Navigate to the login page or another page
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error.message);
      alert(error.message);
    }
  };

  return (
    <>
      <button className="back-button" onClick={() => navigate('/')}>
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
          <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
        </svg>
        {/* <span>Back</span> */}
      </button>
<div className="mains-container">
      <div className="signup-container">
        <div className="logo">AppaTrack</div>
        <h2>Sign Up</h2>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-start">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" name="username" id="username" className="form-control" placeholder="Enter your username" required />
            </div>
              
            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" required />
            </div>
              
            <div className="mb-3 text-start">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" name="password" id="password" className="form-control" placeholder="Enter your password" required />
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
              <input type="password" name="confirm_password" id="confirm_password" className="form-control" placeholder="Confirm Password" required />
            </div>
              
            <button type="submit" className="btn btn-success">Sign Up</button>
          </form>
        </div>
        
        <div className="mt-3 text-small" >
          Already have an account? <Link to="/login" >Login here</Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup;