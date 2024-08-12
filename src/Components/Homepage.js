import React, { useContext, useReducer, useState } from "react";
import { UserContext } from "./Register";
import { LoginContext } from "./Login";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import "./Homepage.css"
import { initialState, ValuesReducer } from "./Reducer";

function HomePage(props){
    // const userName=useContext(UserContext);
    // const valuesLogin=useContext(LoginContext)
    const [fruitsArray,setFruitsArray]=useState(["apple","banana","pineapple","grapes","mango"])
    const [fruitName,setFruitName]=useState("")
    const [fruitsObject,setFruitsObject]=useState({name:"apple",color:"red"})
    const [key,setKey]=useState("")
    const[value,setValue]=useState("")
    const [gender,setGender]=useState("")

    const navigate=useNavigate()
    const [values,dispatch]=useReducer(ValuesReducer,initialState)
    return(
        <div>
            <NavBar/>
            {/* {"username of register page is"+userName}
            {"username of login page is "+valuesLogin?.userName}
            {"password is "+valuesLogin?.password} */}
            <h1>Welcome To Homepage {values.userName}</h1>
            <h2>Gender</h2>
            <input type="radio" checked={gender==="male"} onClick={()=>{setGender("male")}}></input>
            <label>Male</label>
            <input type="radio" checked={gender==="female"} onClick={()=>{setGender("female")}}></input>
            <label>Female</label>
            <br></br>
            {gender !== "" &&
            <div>
            {gender === "male" &&
            <div>   
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
            </div>
            }
            <br/>
            {gender === "female" &&
            <div>
            <label>key</label>
            <input type="text" value={key} onChange={(e)=>{setKey(e.target.value)}}></input>
            <label>value</label>
            <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
            <button onClick={()=>{setFruitsObject({...fruitsObject,key:value})}}>Add Object</button>
            <h2>Fruits Object</h2>
            <div className="homepage2">
            {Object.entries(fruitsObject).map(([key,val],index)=>{
                return <div className="homepage">{key+" : "+val}</div>
            })}
            </div>
            </div>
            }
            </div>
          } 
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