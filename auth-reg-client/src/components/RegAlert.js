function RegAlert(props) {
  if (props.emailErrorMessage) {
    return (
      <div className="alert-error">
        <span className="alert-text">{props.emailErrorMessage}</span>
      </div>
    );
  } else if (props.usernameErrorMessage) {
    return (
      <div className="alert-error">
        <span className="alert-text">{props.usernameErrorMessage}</span>
      </div>
    );
  }
}
export default RegAlert;
