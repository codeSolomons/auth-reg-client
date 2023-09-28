import { Link } from "react-router-dom";
import "../styles/VerificationTimeout.css";
function VerificationTimeout(){

    
    return(

        <div className="timeoutContainer">
            
            <div className="title">
                <h1>Verification Timeout</h1>
            </div>
            <div className="info">
                Sorry we didn't get your verification after 30mins.
            </div>
            <Link to="/verification">
            <input
                type="button"
                name="resendLink"
                className="resendLink-button"
                value="Resend Link"
              
            />
            </Link>
        </div>
    );
}

export default VerificationTimeout;