import axios from "axios";
import React, { useEffect, useState } from "react";


function ApiCalls(){

    const [data,setData]=useState()

    async function getData(){
        var response=await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        setData(response.data)
        console.log(response);   
    }

    // useEffect(()=>{
    //     getData()
    // },[])


    return(
        <div>
            <h1>Api Calls</h1>
            {data && data.title}
            <div>
                <button onClick={()=>{getData()}}>getData</button>
            </div>
        </div>
    )
}

export default ApiCalls