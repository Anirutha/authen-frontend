import { GoogleLogin } from '@leecheuk/react-google-login';
import { useNavigate } from 'react-router-dom'

const clientID="649235443100-hslilrjf6thlprm5uh2gh2u77p2q7pg5.apps.googleusercontent.com"

function LoginButton(){
    const navigate = useNavigate()
    const onSuccess=(res)=>{
        console.log("LOGIN SUCCESS! Current user: ",res.profileObj);
        navigate("/");
    }
    const onFailure=(res)=>{
        console.log("LOGIN FAILED! res: ",res);
    }
    return(
        <div id="signInButton">
             <GoogleLogin
        clientId={clientID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      </div>
    )
}


export default LoginButton