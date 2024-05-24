import React, { useState } from "react";
import SignUpForm from "./SignUp"; // Ensure SignUpForm is correctly imported
import "../LogInAndSignUp/LogInAndSignUp.css"; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function SignInForm() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    const { email, password } = state;
    alert(`You are logging in with email: ${email} and password: ${password}`);
    setState({ email: "", password: "" });
  };

  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
          <a href="#" className="social"><i className="fa-solid fa-phone" /></a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <div className="input-pass">
          <input
            type={isShowPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
          <i
            className={isShowPassword ? "fa-solid fa-eye" : "fa-sharp fa-solid fa-eye-slash"}
            onClick={() => setIsShowPassword(!isShowPassword)}
          />
        </div>
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

function SignIn() {
  const [type, setType] = useState("signIn");

  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass = `container ${type === "signUp" ? "right-panel-active" : ""}`;

  return (
    <div className="App">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={() => handleOnClick("signIn")}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" id="signUp" onClick={() => handleOnClick("signUp")}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
