import React, { useEffect, useState } from "react";

function UseEffect(){

    function showAlert(count){
        setTimeout(()=>{
            alert("useEffect page is called and count is"+count)
        },[])
    }
    const [count,setCount]=useState(0)
    const [name,setName]=useState("")

    useEffect(()=>{
        showAlert(count)
    },[count,name])

    return(
        <div>
            {/* {showAlert()} */}
            <h1>UseEffect</h1>
            <button onClick={()=>{showAlert()}}>alert</button>
            <input onChange={(e)=>{setName(e.target.value)}}></input>
            {count}
            <button onClick={()=>{setCount(count+1)}}>incrementCount</button>
        </div>
    )
}

export default UseEffect