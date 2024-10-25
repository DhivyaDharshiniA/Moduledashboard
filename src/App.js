
import React, { useState } from "react";
import { Loginpage } from "./components/Login/loginPage";
import  Signup from "./components/Signup/SingnupPage"; // Assuming this is the correct path
import Dashboard from "./components/Dashboard/Dashboard"; // Assuming this is your dashboard page

function App() {
  const [currentPage, setCurrentPage] = useState("login"); // Tracks the current page
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks if the user is logged in

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set logged in to true
    setCurrentPage("dashboard"); // Navigate to Dashboard after login
  };

  return (
    <div className="App">
      {currentPage === "login" && <Loginpage onNavigate={handleNavigation} onLoginSuccess={handleLoginSuccess} />}
      {currentPage === "signup" && <Signup onNavigate={handleNavigation} />}
      {isLoggedIn && currentPage === "dashboard" && <Dashboard />}
    </div>
  );
}

export default App;
