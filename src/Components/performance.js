import React, { useMemo, useState } from "react";

function Performance(){
    const [count,setCount]=useState(0)
    const calculatedValue=useMemo(()=> bigCalculation(count),[count])
    const [name,setName]=useState("")

    return(
        <div>
            <h1>Performance Using use memo</h1>
            {"calculated value is : "+calculatedValue}<br></br>
            {"count value is : "+count}<br></br>
            {"name  is : "+name}
            <div>
                <button onClick={()=>{setCount(count+1)}}>increment count</button>
                <input onChange={(e)=>{setName(e.target.value)}}></input>
            </div>
        </div>
    )
}

function bigCalculation(n){
    console.log("big calculation is getting called");
    for(let i=0;i<10;i++){
        n=n+1
    }
    return n;
}

export default Performance