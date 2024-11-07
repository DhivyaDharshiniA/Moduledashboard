// import "@iconscout/unicons/css/line.css";
// import { useState } from "react";
// import { Loginpage } from "../Login/loginPage";
// //import "../Login/loginpage.css";
// import "./signup.css";

// const Signup = () => {
//   // State for Page Showing
//   const [page, setPage] = useState("signup");

//   // Dynamic form handling
//   const [formData, setFormData] = useState({
//     Firstname: "",
//     Lastname: "",
//     Email: "",
//     password: "",
//   });

//   // Error message
//   const [errorMessage, setErrorMessage] = useState("");

//   // Changing the valueA
//   const changeValue = (event) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [event.target.id]: event.target.value,
//     }));

//     if (event.target.type === "password") passwordErrorShow(event);
//     if (event.target.type === "text") nameValidator(event);
//     if (event.target.type === "email") emailValidator(event);

//     uniconColor(event);
//   };

//   // Name validation
//   const nameValidator = (event) => {
//     if (event.target.value.trim() === "")
//       event.target.style.borderBottom = "2px solid red";
//     else event.target.style.borderBottom = "2px solid blue";
//   };

//   // Password error handling
//   const passwordErrorShow = (event) => {
//     if (
//       /\d/.test(event.target.value) &&
//       /[A-Za-z]/.test(event.target.value) &&
//       event.target.value.length >= 8
//     )
//       setErrorMessage("");
//     else
//       setErrorMessage(
//         "Password must contain at least one digit, one uppercase and lowercase letter, and be at least 8 characters long."
//       );
//   };

//   // Email validator
//   const emailValidator = (event) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(event.target.value)) {
//       event.target.style.borderBottom = "2px solid red";
//       setErrorMessage("Invalid email format.");
//     } else {
//       event.target.style.borderBottom = "2px solid blue";
//       setErrorMessage(""); // Clear any error messages related to the email field
//     }
//   };

//   // Showing the password
//   const eyeShow = (event) => {
//     if (event.target.className === "uil uil-eye-slash") {
//       document.getElementById("password").type = "text";
//       event.target.className = "uil uil-eye";
//     } else {
//       document.getElementById("password").type = "password";
//       event.target.className = "uil uil-eye-slash";
//     }
//   };

//   // Form submission handler
//   const GoToSignInPage = (event) => {
//     event.preventDefault(); // Prevent form submission

//     const { Firstname, Lastname, Email, password } = formData;

//     if (!Firstname.trim() || !Lastname.trim() || !Email.trim() || !password.trim()) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     // Validate email format before proceeding
//     if (errorMessage) {
//       alert("Please fix the errors in the form.");
//       return;
//     }

//     setPage(() => (page === "signup" ? "" : "signup"));
//   };

//   // Color changing for Unicons
//   const uniconColor = (event) => {
//     setTimeout(
//       () => (event.target.parentElement.querySelector(".uil").style.color = "black"),
//       10000
//     );
//     event.target.parentElement.querySelector(".uil").style.color = "blue";
//   };

//   // Conditional rendering to switch between login and signup pages
//   return page === "signup" ? (
//     <>
//       <div className="signupbody">
//         <h1>Create Your Account</h1>
//         <br/>
//         <br/>
//         <br/>
//         <div className="signupform_Page">
//           <form onSubmit={GoToSignInPage}>
//             <div className="signupinput_field">
//               <i className="uil uil-user"></i>
//               <label htmlFor="Firstname">First Name</label>
//               <br />
//               <input
//                 type="text"
//                 name="Firstname"
//                 id="Firstname"
//                 placeholder="Enter The First Name"
//                 onChange={changeValue}
//                 required
//               />
//             </div>
//             <div className="signupinput_field">
//               <i className="uil uil-user"></i>
//               <label htmlFor="Lastname">Last Name</label>
//               <br />
//               <input
//                 type="text"
//                 name="Lastname"
//                 id="Lastname"
//                 placeholder="Enter The Last Name"
//                 onChange={changeValue}
//                 required
//               />
//             </div>
//             <div className="signupinput_field">
//               <i className="uil uil-envelope"></i>
//               <label htmlFor="Email">Email</label>
//               <mark className="requiredEmail">*</mark>
//               <br />
//               <input
//                 type="email"
//                 name="Email"
//                 id="Email"
//                 placeholder="Enter The Email"
//                 onChange={changeValue}
//                 required
//               />
//             </div>
//             <div className="signupinput_field">
//               <i className="uil uil-lock"></i>
//               <label htmlFor="password">Password</label>{" "}
//               <mark className="requiredPassword">*</mark>
//               <br />
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Enter the Password"
//                 onChange={changeValue}
//                 required
//               />
//               <i
//                 className="uil uil-eye-slash"
//                 onClick={eyeShow}
//                 style={{ cursor: "pointer" }}
//               ></i>
//             </div>
//             <p className="signuperrorShow">{errorMessage}</p>
//             <div className="signupinput_field">
//               <input type="submit" value="" />
//               <span>Register</span>
               
//               <br/>
//                       Already Registered?
//               <button
//                 style={{ backgroundColor: "transparent", border: "none", color: "blue", cursor: "pointer" }}
//                 onClick={GoToSignInPage}
//               >
//                 Signin
//               </button>
//               <br/>
//               <br/>
//               <br/>
//               <br/>
//               <br/>
             
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   ) : (
//     <Loginpage formDatas={formData}></Loginpage>
//   );
// };

// export default  Signup;
import "@iconscout/unicons/css/line.css";
import { useState } from "react";
import { Loginpage } from "../Login/loginPage";
import "./signup.css"; // Keep your custom styles if necessary

const Signup = () => {
  const [page, setPage] = useState("signup");
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const changeValue = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.id]: event.target.value,
    }));

    if (event.target.type === "password") passwordErrorShow(event);
    if (event.target.type === "text") nameValidator(event);
    if (event.target.type === "email") emailValidator(event);

    uniconColor(event);
  };

  const nameValidator = (event) => {
    if (event.target.value.trim() === "")
      event.target.style.borderBottom = "2px solid red";
    else event.target.style.borderBottom = "2px solid blue";
  };

  const passwordErrorShow = (event) => {
    if (
      /\d/.test(event.target.value) &&
      /[A-Za-z]/.test(event.target.value) &&
      event.target.value.length >= 8
    )
      setErrorMessage("");
    else
      setErrorMessage(
        "Password must contain at least one digit, one uppercase and lowercase letter, and be at least 8 characters long."
      );
  };

  const emailValidator = (event) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(event.target.value)) {
      event.target.style.borderBottom = "2px solid red";
      setErrorMessage("Invalid email format.");
    } else {
      event.target.style.borderBottom = "2px solid blue";
      setErrorMessage(""); // Clear any error messages related to the email field
    }
  };

  const eyeShow = (event) => {
    if (event.target.className === "uil uil-eye-slash") {
      document.getElementById("password").type = "text";
      event.target.className = "uil uil-eye";
    } else {
      document.getElementById("password").type = "password";
      event.target.className = "uil uil-eye-slash";
    }
  };

  const GoToSignInPage = (event) => {
    event.preventDefault();
    const { Firstname, Lastname, Email, password } = formData;

    if (!Firstname.trim() || !Lastname.trim() || !Email.trim() || !password.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    if (errorMessage) {
      alert("Please fix the errors in the form.");
      return;
    }

    setPage(() => (page === "signup" ? "" : "signup"));
  };

  const uniconColor = (event) => {
    const icon = event.target.parentElement.querySelector(".uil");
    
    if (icon) {
      setTimeout(() => {
        icon.style.color = "black";
      }, 10000);
      
      icon.style.color = "blue";
    }
  };
  

  return page === "signup" ? (
    <>
      <div className="bg-gradient-to-r from-blue-200 to-teal-200 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Your Account</h1>
          <form onSubmit={GoToSignInPage}>
            <div className="mb-4">
              <label htmlFor="Firstname" className="block text-sm font-semibold text-gray-600">First Name</label>
              <input
                type="text"
                id="Firstname"
                placeholder="Enter your first name"
                className="w-full mt-2 p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={changeValue}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Lastname" className="block text-sm font-semibold text-gray-600">Last Name</label>
              <input
                type="text"
                id="Lastname"
                placeholder="Enter your last name"
                className="w-full mt-2 p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={changeValue}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Email" className="block text-sm font-semibold text-gray-600">Email</label>
              <input
                type="email"
                id="Email"
                placeholder="Enter your email"
                className="w-full mt-2 p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={changeValue}
                required
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full mt-2 p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onChange={changeValue}
                required
              />
              <i
                className="uil uil-eye-slash absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={eyeShow}
              ></i>
            </div>

            {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>

            <p className="text-center text-sm">
              Already registered?{" "}
              <button
                type="button"
                className="text-blue-500"
                onClick={GoToSignInPage}
              >
                Sign In
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  ) : (
    <Loginpage formDatas={formData}></Loginpage>
  );
};

export default Signup;
