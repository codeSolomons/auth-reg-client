function UpdatePasswordForm()
{
    return(

        <div className="updatePasswordForm">
            <div className="title"><h1>Change your password</h1></div>
            
            <div className="Form-control ">
                <input
                  className="App-Input password-update"
                  type="password"
                  name="current-password"
                  placeholder="Current password"
                  
                />
            </div>

            <div className="Form-control ">
                <input
                  className="App-Input password-update"
                  type="password"
                  name="new-password"
                  placeholder="New password"
                  
                />
            </div>

            <input
                type="button"
                name="update-password"
                className="update-button"
                value="Update"
                
            />
            
        </div>
    );

}

export default UpdatePasswordForm;