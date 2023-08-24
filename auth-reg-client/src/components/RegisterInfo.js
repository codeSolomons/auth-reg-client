import { Link } from "react-router-dom";

function RegisterInfo() {
  return (
    <p className="Register-Info-text">
      Don't have an account yet?
      <Link to="/register">
        <span className="Register-Info-text-blue"> Register</span>
      </Link>
    </p>
  );
}

export default RegisterInfo;
