import { useState } from 'react';
import Brand from '../components/Brand';
import axios from "axios";
import RegisterInfo from '../components/RegisterInfo';

function Login(){
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    
   
    /*Action*/
    const handleSubmit =  async e=> {

        e.preventDefault();
        const response = await loginUser({
            username,
            password
        });
        //Examine response
        console.log(response);

    };

    /*View*/
    return(
        <>
            
         <Brand/>
        <div className="Login-form">
            
            <div className="Form-control ">
                <input className="App-Input Login-username" type="text" name="username" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className="Form-control">
                <input className="App-Input Login-password" type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <input type="button" name="Login" className="Login-button" value="Login" onClick={handleSubmit}/>

            <RegisterInfo/>
        </div>
        
        
        </>
        
    );
}

async function loginUser(credentials){
    
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
    return axios.post(process.env.REACT_APP_BACKEND + '/login/',{
        data: JSON.stringify(credentials)
    },
    {headers:headers}).then(data =>console.log(data.json()))
      .catch(err=>console.log(err));
    
}


export default Login;