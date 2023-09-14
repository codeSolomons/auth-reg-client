

import { useEffect, useState } from "react";
import { profileUser } from "../services/AuthService";
import  '../styles/Dashboard.css';
import '../styles/ProfileMenu.css';
import '../styles/UpdatePasswordForm.css';
import csIcon from '../Images/csIcon.png';

import userIcon from '../Images/avatar_ic.png';
import { useNavigate } from "react-router-dom";

import UserProfile from "../components/UserProfile";
import UpdatePasswordForm from "../components/UpdatePasswordForm";

function Dashboard(){

    

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [profileMenuDisplay, setProfileMenuDisplay] = useState(false);
    const [changePasswordComponentDisplay, setchangePasswordComponentDisplay] = useState(false);
    
    const Nav = useNavigate();

    //retrieve token from local storage
    const token = localStorage.getItem('token');  

    useEffect(()=>{

        //if token does not exists
        if(token == null){
            Nav("/login");
        }
       
    },[]);


    function profileMenuToggle(){
        if(!profileMenuDisplay){
            setProfileMenuDisplay(true)
        }else{
            setProfileMenuDisplay(false)
        }
    }
    
    function changePasswordComponentToggle(){
        if(!changePasswordComponentDisplay){
            setchangePasswordComponentDisplay(true)
        }
        else{
            setchangePasswordComponentDisplay(false)
        }
    }
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
                    <div className="user-avatar"  onClick={profileMenuToggle}  >
                        <img className="avatar" alt="user" src={userIcon} />
                    </div>

                    {profileMenuDisplay? 
                    
                        <div className="profile-menu" >
                            <ul className="menu">
                               <li className="element" onClick={Logout}>Logout</li>
                               <li className="element" onClick={changePasswordComponentToggle}>Change password</li>
                            </ul>   
                        </div>
                    
                    : ""
                    }
                    
                                        
                </div>
            </div>
            
            {changePasswordComponentDisplay?
                <UpdatePasswordForm></UpdatePasswordForm>
                :
                <UserProfile 
                    name={name} 
                    email={email} 
                    username={username} >
                </UserProfile>
            }
            



        </div>
    );
}

export default Dashboard;
