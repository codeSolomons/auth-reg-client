import Brand from "../components/Brand";
import LoginInfo from "../components/LoginInfo";
import { registerUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const regData = Object.fromEntries(formData);

    registerUser(regData)
      .then((res) => {
        // console.log(res);
        navigate("/login");
      })
      .catch((error) => {
        console.log("Registration failed");
        console.error(error);
      });
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
              name="first_name"
              placeholder="First Name"
              required
            />
          </div>
          <div className="Form-control">
            <input
              className="App-Input"
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="Form-control">
            <input
              className="App-Input register-email"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="Form-control">
            <input
              className="App-Input register-username"
              type="text"
              name="username"
              placeholder="Username"
              required
            />
          </div>
          <div className="Form-control">
            <input
              className="App-Input register-password"
              type="password"
              name="password"
              placeholder="Password"
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