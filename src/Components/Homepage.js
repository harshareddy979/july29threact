import React, { useContext, useState } from "react";
import { UserContext } from "./Register";
import { LoginContext } from "./Login";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import "./Homepage.css"

function HomePage(props){
    // const userName=useContext(UserContext);
    // const valuesLogin=useContext(LoginContext)
    const [fruitsArray,setFruitsArray]=
    useState(["apple","banana","pineapple","grapes","mango"])
    const [fruitName,setFruitName]=useState("")

    const navigate=useNavigate()
    return(
        <div>
            <NavBar/>
            {/* {"username of register page is"+userName}
            {"username of login page is "+valuesLogin?.userName}
            {"password is "+valuesLogin?.password} */}
            <h1>Welcome To Homepage {props.loginUserName}</h1>
            <input type="text" value={fruitName} onChange={(e)=>{setFruitName(e.target.value)}}></input>
            <button onClick={()=>{fruitName && setFruitsArray([...fruitsArray, fruitName]);
            setFruitName("")
            }}>Add array</button>
            <h2>Fruits Array</h2>
            <br/>
            <div className="homepage2">
            {fruitsArray.map((ele,index)=>{
                return <div className="homepage">{ele}</div>
            })}
            </div>
            <br/>
            <button onClick={()=>{
                navigate("/")
                // props.setLoginFlag(false);props.setUserName("");
                // props.setPassword("");
                // props.obj({})
            }}>Logout</button>
        </div>
    )
}

export default HomePage