import womanIcon from '../Images/woman 1.png';

function UserProfile(props){

    return(
        <>
         <div className="welcome-text">
                <div className="work-text">Work</div>
                <div className="brilliant-text">brilliant</div>
            </div>

            <div className="user-profile">
                <img src={womanIcon} alt="profile"/>
                <div className="user-name">{props.name}</div>
                <div className="user-email">{props.email}</div>
                <div className="user-username">{props.username}</div>
            </div>
        
        </>
       

    );
}
export default UserProfile;