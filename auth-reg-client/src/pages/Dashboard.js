

import { useEffect, useState } from "react";
import { profileUser } from "../services/AuthService";
import  '../styles/Dashboard.css';
import csIcon from '../Images/csIcon.png';
import womanIcon from '../Images/woman 1.png';
import { useNavigate } from "react-router-dom";


function Dashboard(){

    

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    
    const Nav = useNavigate();

    //retrieve token from local storage
    const token = localStorage.getItem('token');  

    useEffect(()=>{

        //if token does not exists
        if(token == null){
            Nav("/login");
        }
       
    },[]);



    
    
    let data={
        "token":token
    }
    const profileFetch  = async (e)=>{

        await profileUser(data)
        .then((response)=>{
            console.log(response);
            setName(response.user_profile.xfirst_name +' '+ response.user_profile.last_name);
            setEmail(response.user_profile.email);
            setUsername(response.user_profile.username);
        }).catch((err)=>{
            console.log(err);
            Nav('/login');
        });

    }
    
    profileFetch();
    
    function Logout(){
        
        localStorage.clear();
        Nav('/login');
    }
    
    
    return(

        
        <div className="main">
            
            <div className="nav-bar">
                <div className="header">
                    
                    <div className="header-logo"><img alt="codeSolomon" src={csIcon}/></div>
                    <div className="header-text">Auth-Reg</div>
                </div>
                <div className="logout-container">
                    <div className="greetings-text">Welcome, <spane className="greetings-name">{name}</spane></div>
                    <input
          type="button"
          className="logout-button"
          value="Logout"
          onClick={Logout}
        />
                </div>
            </div>
            
            <div className="welcome-text">
                <div className="work-text">Work</div>
                <div className="brilliant-text">brilliant</div>
            </div>

            <div className="user-profile">
                <img src={womanIcon} alt="profile"/>
                <div className="user-name">{name}</div>
                <div className="user-email">{email}</div>
                <div className="user-username">{username}</div>
            </div>



        </div>
    );
}

export default Dashboard;
