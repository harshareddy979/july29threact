import axios from "axios";
import React, { useEffect, useState } from "react";


function ApiCalls(){

    const [data,setData]=useState()

    async function getData(){
        var response=await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        setData(response.data)
        console.log(response);   
    }

    async function postData(){
        var apiData={
            "name":"besant",
            "age":"100",
            "title":"data created successfully"
        }
        var response=await axios.post("https://jsonplaceholder.typicode.com/posts",apiData)
        console.log(response);
        setData(response.data)  
    }

    async function putData(){
        var apiData={
            "userId": 777,
            "title": "updated successfully",
            "body": "new body added"
        }
        var response=await axios.put("https://jsonplaceholder.typicode.com/posts/1",apiData)
        console.log(response);
        setData(response.data)
    }

    async function deleteData(){
        var response=await axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        console.log(response);
        setData(response.data)
    }

    // useEffect(()=>{
    //     getData()
    // },[])


    return(
        <div>
            <h1>Api Calls</h1>
            {data && data.title
            // data.map((e,i)=>{return e.id})
            }
            <div>
                <button onClick={()=>{getData()}}>getData</button>
                <button onClick={()=>{postData()}}>postData</button>
                <button onClick={()=>{putData()}}>putData</button>
                <button onClick={()=>{deleteData()}}>deleteData</button>
            </div>
        </div>
    )
}

export default ApiCalls