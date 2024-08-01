import React from "react";

function HomePage(props){
    return(
        <div>
            
            <h1>Welcome To Homepage {props.loginUserName}</h1>
            <button onClick={()=>{props.setLoginFlag(false);props.setUserName("");
                props.setPassword("");
                props.obj({})
            }}>Logout</button>
        </div>
    )
}

export default HomePage