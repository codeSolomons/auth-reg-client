import { Link } from "react-router-dom";
import csIcon from "../Images/csIcon.png";

import "../styles/Splash.css";

function Splash() {
  const handleSubmit = () => {
    // YET TO IMPLEMENT
  };

  return (
    <div className="splash-container">
      <div className="splash-brand">
        <div className="splash-logo-section">
          <img className="splash-logo" alt="codeSolomons" src={csIcon} />
        </div>
        <div className="splash-text-section">
          <span className="splash-auth-reg-text">AUTH-REG</span>
          <span className="splash-tagline">Re-imagine creativity</span>
        </div>
      </div>
      <div className="splash-actions">
        <Link to="/register">
          <input
            type="button"
            name="splash-action"
            className="splash-button"
            value="LET'S GO"
            onClick={handleSubmit}
          />
        </Link>
      </div>
    </div>
  );
}

export default Splash;
