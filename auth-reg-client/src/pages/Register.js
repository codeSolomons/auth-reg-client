import { useState } from "react";
import Brand from "../components/Brand";
import LoginInfo from "../components/LoginInfo";

import "../styles/Register.css";

function Register() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    // YET TO IMPLEMENT
  };

  return (
    <div className="register-container">
      <Brand />
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <div className="Form-control">
            <input
              className="App-Input"
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="Form-control">
            <input
              className="App-Input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="Form-control">
            <input
              className="App-Input register-email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="Form-control">
            <input
              className="App-Input register-username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="Form-control">
            <input
              className="App-Input register-password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input
            type="submit"
            name="Register"
            className="register-button"
            value="Create Account"
          />
          <LoginInfo />
        </form>
      </div>
    </div>
  );
}

export default Register;
