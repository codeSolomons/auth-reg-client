import "../styles/VerificationNotify.css";
function VerificationNotify(){

    return(
        <div className="verification-notify">
            <div className="title">
                <h1>Verification is needed</h1>
            </div>
            <div className="info">
                Hi _user_ we have sent a verification email to your inbox _email_, please click on the 
                verification link in your inbox to activate your account
                <br/>
                Link will expire in 30 minutes

            </div>

        </div>

    );

}

export default VerificationNotify;