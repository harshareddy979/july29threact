import React, { useContext } from "react";
import { UserContext } from "./Register";
import { LoginContext } from "./Login";
import NavBar from "./NavBar";

function HomePage(props){
    const userName=useContext(UserContext);
    const valuesLogin=useContext(LoginContext)
    return(
        <div>
            <NavBar/>
            {"username of register page is"+userName}
            {"username of login page is "+valuesLogin?.userName}
            {"password is "+valuesLogin?.password}
            <h1>Welcome To Homepage {props.loginUserName}</h1>
            <button onClick={()=>{props.setLoginFlag(false);props.setUserName("");
                props.setPassword("");
                props.obj({})
            }}>Logout</button>
        </div>
    )
}

export default HomePage