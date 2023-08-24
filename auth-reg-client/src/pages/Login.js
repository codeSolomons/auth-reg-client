import { useState } from "react";
import Brand from "../components/Brand";
import Alert from "../components/Alert";
import { loginUser } from "../services/AuthService";
import RegisterInfo from "../components/RegisterInfo";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [callSuccess, setCallSuccess] = useState(false);
  const [error, setError] = useState();

  /*Action*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    //Call API : /login
    const credentials = {
      username: username,
      password: password,
    };

    loginUser(credentials)
      .then((response) => {
        //TO DO: Create user session/cookie
        setCallSuccess(true);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            setError(err.response.data.message);
          }
        } else if (err.request) {
          setError("Request failed");
          console.log("Request error : " + err.message);
        } else {
          setError("Something happened");
          console.log("Error Something else");
        }
      });
  };

  /*View*/
  return (
    <>
      <Brand />
      <div className="Login-form">
        <div className="Form-control ">
          <input
            className="App-Input Login-username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="Form-control">
          <input
            className="App-Input Login-password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="button"
          name="Login"
          className="Login-button"
          value="Login"
          onClick={handleSubmit}
        />

        <RegisterInfo />
      </div>

      {!callSuccess ? <Alert error="true" message={error} /> : "Success!"}
    </>
  );
}

export default Login;
