
// // import React, { useState } from "react";
// // import Signup from "../Signup/SingnupPage";
// // import Dashboard from "../Dashboard/Dashboard"; // Import Dashboard component
// // import "./loginpage.css";

// // function togglePassword(event) {
// //   const passwordField = document.getElementById("password");
// //   if (passwordField) { // Add this check
// //     if (passwordField.type === "password") {
// //       passwordField.type = "text";
// //       event.target.className = "toggle-password uil-eye";
// //     } else {
// //       passwordField.type = "password";
// //       event.target.className = "toggle-password uil-eye-slash";
// //     }
// //   }
// // }

// // const Loginpage = ({ formDatas }) => {
// //   const [Page, setPage] = useState("login");
// //   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

// //   const toggleForm = () => {
// //     setPage(Page === "login" ? "signup" : "login");
// //   };

// //   const changecolor = (event) => {
// //     if (event.target.type === "email") {
// //       const emailIcon = document.querySelector(".uil");
// //       if (emailIcon) {
// //         setTimeout(() => {
// //           emailIcon.style.color = "white";
// //         }, 5000);
// //         emailIcon.style.color = "blueviolet";
// //       }
// //     } else if (event.target.type === "password") {
// //       const lockIcon = document.getElementById("lock");
// //       if (lockIcon) {
// //         setTimeout(() => {
// //           lockIcon.style.color = "white";
// //         }, 5000);
// //         lockIcon.style.color = "blueviolet";
// //       }
// //     }
// //   };

// //   const validate = (event) => {
// //     event.preventDefault();

// //     if (!formDatas) {
// //       alert("The User is Unavailable! Please Register First.");
// //       return;
// //     }

// //     const email = document.getElementById("email");
// //     const password = document.getElementById("password");

// //     if (email && password) { // Add this check
// //       if (email.value !== formDatas["Email"]) {
// //         email.style.border = "1px solid red";
// //         alert("Invalid Email");
// //         return;
// //       }

// //       if (password.value !== formDatas["password"]) {
// //         password.style.border = "1px solid red";
// //         alert("Invalid Password");
// //         return;
// //       }

// //       // Successful login
// //       setIsLoggedIn(true); // Set login state to true

// //       // Optionally change field borders to indicate success
// //       email.style.border = "2px solid green";
// //       password.style.border = "2px solid green";
// //       alert("Login Successful");
// //     }
// //   };

// //   if (isLoggedIn) {
// //     // Redirect to Dashboard if logged in
// //     return <Dashboard />;
// //   }

// //   // Render login or signup form based on the current page state
// //   return Page === "login" ? (
// //     <div
// //       style={{
// //         fontFamily: "'Roboto', sans-serif",
// //         backgroundSize: "cover",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         height: "100vh",
// //         margin: 0,
// //         color: "white",
// //         backgroundColor: "black",
// //       }}
// //     >
// //       <div className="container">
// //         <h2>Login</h2>
// //         <button className="underline"></button>
// //         <form id="login-form">
// //           <i className="uil uil-envelope email"></i>
// //           <label htmlFor="email">Email</label>
// //           <input type="email" id="email" onInput={changecolor} required />

// //           <label htmlFor="password">Password</label>
// //           <i className="uil uil-lock pwd" id="lock"></i>
// //           <div className="password-container">
// //             <input
// //               type="password"
// //               id="password"
// //               className="password"
// //               onChange={changecolor}
// //               required
// //             />
// //             <span
// //               className="toggle-password uil-eye-slash"
// //               onClick={togglePassword}
// //             ></span>
// //           </div>

// //           <button type="submit" onClick={validate}>
// //             Login
// //           </button>
// //           <button type="reset">Reset</button>
// //         </form>
// //         <span className="registerLink">Not Yet Registered? </span>
// //         <a href="#" className="toggle-link" onClick={toggleForm}>
// //           Register here
// //         </a>
// //       </div>
// //     </div>
// //   ) : (
// //     <Signup />
// //   );
// // };

// // export { Loginpage };
// import React, { useState } from "react";
// import Signup from "../Signup/SingnupPage";
// import Dashboard from "../Dashboard/Dashboard"; // Import Dashboard component


// function togglePassword(event) {
//   const passwordField = document.getElementById("password");
//   if (passwordField) { // Add this check
//     if (passwordField.type === "password") {
//       passwordField.type = "text";
//       event.target.className = "toggle-password uil-eye";
//     } else {
//       passwordField.type = "password";
//       event.target.className = "toggle-password uil-eye-slash";
//     }
//   }
// }

// const Loginpage = ({ formDatas }) => {
//   const [Page, setPage] = useState("login");
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

//   const toggleForm = () => {
//     setPage(Page === "login" ? "signup" : "login");
//   };

//   const changecolor = (event) => {
//     if (event.target.type === "email") {
//       const emailIcon = document.querySelector(".uil");
//       if (emailIcon) {
//         setTimeout(() => {
//           emailIcon.style.color = "white";
//         }, 5000);
//         emailIcon.style.color = "blueviolet";
//       }
//     } else if (event.target.type === "password") {
//       const lockIcon = document.getElementById("lock");
//       if (lockIcon) {
//         setTimeout(() => {
//           lockIcon.style.color = "white";
//         }, 5000);
//         lockIcon.style.color = "blueviolet";
//       }
//     }
//   };

//   const validate = (event) => {
//     event.preventDefault();

//     if (!formDatas) {
//       alert("The User is Unavailable! Please Register First.");
//       return;
//     }

//     const email = document.getElementById("email");
//     const password = document.getElementById("password");

//     if (email && password) { // Add this check
//       if (email.value !== formDatas["Email"]) {
//         email.style.border = "1px solid red";
//         alert("Invalid Email");
//         return;
//       }

//       if (password.value !== formDatas["password"]) {
//         password.style.border = "1px solid red";
//         alert("Invalid Password");
//         return;
//       }

//       // Successful login
//       setIsLoggedIn(true); // Set login state to true

//       // Optionally change field borders to indicate success
//       email.style.border = "2px solid green";
//       password.style.border = "2px solid green";
//       alert("Login Successful");
//     }
//   };

//   if (isLoggedIn) {
//     // Redirect to Dashboard if logged in
//     return <Dashboard />;
//   }

//   // Render login or signup form based on the current page state
//   return Page === "login" ? (
//     <div className="flex items-center justify-center h-screen bg-black text-white">
//       <div className="container p-8 bg-gray-800 rounded-xl shadow-xl w-96">
//         <h2 className="text-center text-3xl mb-5">Login</h2>
//         <button className="w-16 h-1 bg-blue-500 mb-6 block mx-auto"></button>
//         <form id="login-form">
//           <div className="relative mb-6">
//             <i className="uil uil-envelope absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-xl"></i>
//             <label htmlFor="email" className="block text-lg mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-3 bg-transparent border-b-2 border-white text-white text-lg focus:outline-none"
//               onInput={changecolor}
//               required
//             />
//           </div>

//           <div className="relative mb-6">
//             <i id="lock" className="uil uil-lock absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-xl"></i>
//             <label htmlFor="password" className="block text-lg mb-2">Password</label>
//             <div className="relative">
//               <input
//                 type="password"
//                 id="password"
//                 className="w-full p-3 bg-transparent border-b-2 border-white text-white text-lg focus:outline-none"
//                 onChange={changecolor}
//                 required
//               />
//               <span
//                 className="toggle-password absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
//                 onClick={togglePassword}
//               ></span>
//             </div>
//           </div>

//           <div className="flex justify-between mb-6">
//             <button
//               type="submit"
//               className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
//               onClick={validate}
//             >
//               Login
//             </button>
//             <button
//               type="reset"
//               className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
//             >
//               Reset
//             </button>
//           </div>
//         </form>
//         <div className="text-center">
//           <span className="text-white">Not Yet Registered? </span>
//           <a
//             href="#"
//             className="text-blue-500 underline"
//             onClick={toggleForm}
//           >
//             Register here
//           </a>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <Signup />
//   );
// };

// export { Loginpage };
import React, { useState } from "react";
import Signup from "../Signup/SingnupPage";
import Dashboard from "../Dashboard/Dashboard"; // Import Dashboard component

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
        emailIcon.style.color = "lightseagreen";
      }
    } else if (event.target.type === "password") {
      const lockIcon = document.getElementById("lock");
      if (lockIcon) {
        setTimeout(() => {
          lockIcon.style.color = "white";
        }, 5000);
        lockIcon.style.color = "lightseagreen";
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
      email.style.border = "2px solid lightseagreen";
      password.style.border = "2px solid lightseagreen";
      alert("Login Successful");
    }
  };

  if (isLoggedIn) {
    // Redirect to Dashboard if logged in
    return <Dashboard />;
  }

  // Render login or signup form based on the current page state
  return Page === "login" ? (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-lightblue-400 to-lightgreen-300 text-white">
      <div className="container p-8 bg-white bg-opacity-80 rounded-xl shadow-xl w-96">
        <h2 className="text-center text-3xl mb-5 text-teal-700">Login</h2>
        <button className="w-16 h-1 bg-teal-400 mb-6 block mx-auto"></button>
        <form id="login-form">
          <div className="relative mb-6">
            <i className="uil uil-envelope absolute top-1/2 left-3 transform -translate-y-1/2 text-teal-600 text-xl"></i>
            <label htmlFor="email" className="block text-lg mb-2 text-teal-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-transparent border-b-2 border-teal-600 text-teal-700 text-lg focus:outline-none"
              onInput={changecolor}
              required
            />
          </div>

          <div className="relative mb-6">
            <i id="lock" className="uil uil-lock absolute top-1/2 left-3 transform -translate-y-1/2 text-teal-600 text-xl"></i>
            <label htmlFor="password" className="block text-lg mb-2 text-teal-600">Password</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full p-3 bg-transparent border-b-2 border-teal-600 text-teal-700 text-lg focus:outline-none"
                onChange={changecolor}
                required
              />
              <span
                className="toggle-password absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-teal-600"
                onClick={togglePassword}
              ></span>
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-200"
              onClick={validate}
            >
              Login
            </button>
            <button
              type="reset"
              className="bg-teal-200 text-teal-600 py-2 px-4 rounded-lg hover:bg-teal-300 transition duration-200"
            >
              Reset
            </button>
          </div>
        </form>
        <div className="text-center">
          <span className="text-teal-600">Not Yet Registered? </span>
          <a
            href="#"
            className="text-teal-500 underline"
            onClick={toggleForm}
          >
            Register here
          </a>
        </div>
      </div>
    </div>
  ) : (
    <Signup />
  );
};

export { Loginpage };
