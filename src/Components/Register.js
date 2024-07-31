import React, { useState } from "react";
import { SecondComponent } from "../FirstComponent";

 
function RegisterComponent(){
    const [a,setA]=useState(10)
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [mobileNumber,setMobileNumber]=useState("")
    const [address,setAddress]=useState("")
    const [flag,setFlag]=useState(false)
    // var a=10

    function checkRegistrarDetails(){
        if(userName !== ""){
            if(password !== ""){
                if(mobileNumber !== ""){
                        if(address !== ""){
                            alert("registration success")
                            setFlag(true)
                        }
                        else{
                            alert("address is required")
                        }
                }else{
                    alert("mobile number is required")
                }
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
        <div style={{display:"grid",placeContent:"center"}}>
            {a}
        <button onClick={()=>{setA(20)}}>update a</button>
        <h1 >Registration Page</h1>
          <label>User name</label>
          <input type="text" placeholder="Enter your full name..." value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>  
          <label >Password</label>
          <input type="password" placeholder="Enter your password..." value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <label >Mobile Number</label>
          <input type="text"  placeholder="Enter your mobile number..." value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}/>
          <label >Address</label>
          <input type="text"  placeholder="Enter your address..." value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
          <button onClick={()=>{checkRegistrarDetails()}}>Register</button>
          {flag ? <SecondComponent/> :"please register to see details"}
        </div>
    )
 
}
 
export default RegisterComponent
 