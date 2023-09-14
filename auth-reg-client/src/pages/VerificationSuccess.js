import starIcon from '../Images/success_start_ic.png';
import "../styles/VerificationSuccess.css";
function VerificationSuccess(){

    return(

        <div className="successContainer">
            <div className="imageIcon">
                 <img className='success-logo' alt="verification-success" src={ starIcon }/>
            </div>
            <div className="title">
                <h1>Verification Completed</h1>
            </div>
            <div className="info">
                Please wait while we redirect you to your account.
            </div>
        </div>
    );
}

export default VerificationSuccess;