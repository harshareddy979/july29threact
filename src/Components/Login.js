import React, { createContext, useState } from "react";
import { SecondComponent } from "../FirstComponent";
import HomePage from "./Homepage";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

export const LoginContext=createContext()
 
function LoginComponent(props){
   
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [flag,setFlag]=useState(false)
    const [details,setDetails]=useState({})
    
    function storeDetails(val,key){
            setDetails({...details,[key]:val})
            console.log(details);
    }
    var arr=[userName,password,flag]
    const navigate=useNavigate()

    function checkLoginDetails(){
        if(userName !== ""){
            if(password !== ""){
                            alert("Login success")
                            navigate("/homepage")
                            // setFlag(true)
                        }
            else{
                alert("password is required")
            }
        }
        else{
            alert("username is required")
        }
    }

    return (
    <LoginContext.Provider value={{userName,password}}>
        <div>
            <NavBar/>
        <div style={{display:"grid",placeContent:"center"}}>
        {/* {details && details["username"]}
        {details && details["password"]} */}
        <h1 >Login Page</h1>
        {/* <input onChange={(e)=>{storeDetails(e.target.value,"username")}}></input>
        <input onChange={(e)=>{storeDetails(e.target.value,"password")}}></input> */}
          <label>User name</label>
          <input type="text" placeholder="Enter your full name..." value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>  
          <label >Password</label>
          <input type="password" placeholder="Enter your password..." value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={()=>{checkLoginDetails()}}>Login</button>
          {/* {flag ? <HomePage obj={setDetails} loginUserName={userName} setLoginFlag={setFlag} setUserName={setUserName} setPassword={setPassword}/> :"please Login to see details"} */}
        </div>
        </div>
    </LoginContext.Provider>
    )
 
}
 
export default LoginComponent
 