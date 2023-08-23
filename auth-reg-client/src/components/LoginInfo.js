import { Link } from "react-router-dom";
import "../styles/LoginInfo.css";

function LoginInfo() {
  return (
    <div className="login-info">
      <span className="login-info-text">Already have an account? </span>
      <Link to="/login">
        <span className="login-info-text-green">Login</span>
      </Link>
    </div>
  );
}

export default LoginInfo;
