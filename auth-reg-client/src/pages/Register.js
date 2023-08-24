import { useState } from "react";
import { registerUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import Brand from "../components/Brand";
import LoginInfo from "../components/LoginInfo";
import RegAlert from "../components/RegAlert";

import "../styles/Register.css";

function Register() {
  const [callSuccess, setCallSuccess] = useState(false);
  const [usernameError, setUsernameError] = useState();
  const [emailError, setEmailError] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setUsernameError(null);
    setEmailError(null);
    setError(null);

    e.preventDefault();
    const formData = new FormData(e.target);
    const regData = Object.fromEntries(formData);

    try {
      await registerUser(regData);
      setCallSuccess(true);
      navigate("/login?success=true");
    } catch (error) {
      // console.log(error);
      setCallSuccess(false);
      if (error.response) {
        if (error.response.status === 409) {
          if (error.response.data.username !== undefined) {
            setUsernameError(error.response.data.username[0]);
            console.log(error.response.data.username[0]);
          }

          if (error.response.data.email !== undefined) {
            setEmailError(error.response.data.email[0]);
            console.log(error.response.data.email[0]);
          }
        }
      } else if (error.request) {
        setError("Request failed");
        console.log("Request error : " + error.message);
      } else {
        setError("Something happened");
        console.log("Error Something else");
      }
    }
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

        {callSuccess ? (
          "Success!"
        ) : (
          <RegAlert
            errorMessage={error}
            usernameErrorMessage={usernameError}
            emailErrorMessage={emailError}
          />
        )}
      </div>
    </div>
  );
}

export default Register;
