import { GoogleLogout } from '@leecheuk/react-google-login';
const clientID="649235443100-hslilrjf6thlprm5uh2gh2u77p2q7pg5.apps.googleusercontent.com"

function LogoutButton(){
  
    const onSuccess=()=>{
        console.log("LOG OUT SUCCESSFULL!");
    
    }
    return(
        <div id="signOutButton">
             <GoogleLogout
        clientId={clientID}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
         />
    </div>
    )  
}


export default LogoutButton