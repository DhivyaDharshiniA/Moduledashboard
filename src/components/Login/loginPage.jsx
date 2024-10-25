
import React, { useState } from "react";
import Signup from "../Signup/SingnupPage";
import Dashboard from "../Dashboard/Dashboard"; // Import Dashboard component
import "./loginpage.css";

function togglePassword(event) {
  const passwordField = document.getElementById("password");
  if (passwordField) { // Add this check
    if (passwordField.type === "password") {
      passwordField.type = "text";
      event.target.className = "toggle-password uil-eye";
    } else {
      passwordField.type = "password";
      event.target.className = "toggle-password uil-eye-slash";
    }
  }
}

const Loginpage = ({ formDatas }) => {
  const [Page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const toggleForm = () => {
    setPage(Page === "login" ? "signup" : "login");
  };

  const changecolor = (event) => {
    if (event.target.type === "email") {
      const emailIcon = document.querySelector(".uil");
      if (emailIcon) {
        setTimeout(() => {
          emailIcon.style.color = "white";
        }, 5000);
        emailIcon.style.color = "blueviolet";
      }
    } else if (event.target.type === "password") {
      const lockIcon = document.getElementById("lock");
      if (lockIcon) {
        setTimeout(() => {
          lockIcon.style.color = "white";
        }, 5000);
        lockIcon.style.color = "blueviolet";
      }
    }
  };

  const validate = (event) => {
    event.preventDefault();

    if (!formDatas) {
      alert("The User is Unavailable! Please Register First.");
      return;
    }

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (email && password) { // Add this check
      if (email.value !== formDatas["Email"]) {
        email.style.border = "1px solid red";
        alert("Invalid Email");
        return;
      }

      if (password.value !== formDatas["password"]) {
        password.style.border = "1px solid red";
        alert("Invalid Password");
        return;
      }

      // Successful login
      setIsLoggedIn(true); // Set login state to true

      // Optionally change field borders to indicate success
      email.style.border = "2px solid green";
      password.style.border = "2px solid green";
      alert("Login Successful");
    }
  };

  if (isLoggedIn) {
    // Redirect to Dashboard if logged in
    return <Dashboard />;
  }

  // Render login or signup form based on the current page state
  return Page === "login" ? (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        color: "white",
        backgroundColor: "black",
      }}
    >
      <div className="container">
        <h2>Login</h2>
        <button className="underline"></button>
        <form id="login-form">
          <i className="uil uil-envelope email"></i>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onInput={changecolor} required />

          <label htmlFor="password">Password</label>
          <i className="uil uil-lock pwd" id="lock"></i>
          <div className="password-container">
            <input
              type="password"
              id="password"
              className="password"
              onChange={changecolor}
              required
            />
            <span
              className="toggle-password uil-eye-slash"
              onClick={togglePassword}
            ></span>
          </div>

          <button type="submit" onClick={validate}>
            Login
          </button>
          <button type="reset">Reset</button>
        </form>
        <span className="registerLink">Not Yet Registered? </span>
        <a href="#" className="toggle-link" onClick={toggleForm}>
          Register here
        </a>
      </div>
    </div>
  ) : (
    <Signup />
  );
};

export { Loginpage };
