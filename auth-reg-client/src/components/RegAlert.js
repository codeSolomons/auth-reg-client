import "../styles/RegAlert.css"

function RegAlert(props) {
  if (props.emailErrorMessage) {
    return (
      <div className="reg-alert-error">
        <span className="reg-alert-text">{props.emailErrorMessage}</span>
      </div>
    );
  } else if (props.usernameErrorMessage) {
    return (
      <div className="reg-alert-error">
        <span className="reg-alert-text">{props.usernameErrorMessage}</span>
      </div>
    );
  }
}
export default RegAlert;
