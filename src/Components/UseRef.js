import React, { useRef } from "react";

function UseRef(){

    const fileRef=useRef()
    const focusRef=useRef()
    const btnRef=useRef()
    return(
        <div>
            <h1>UseRef</h1>
            <input type="file" ref={fileRef}></input>
            <br></br>
            <button onClick={()=>{fileRef.current.click()}}>DuplicateFileUpload</button>
            <br/>
            <input type="text" ref={focusRef}></input>
            <br/>
            <button ref={btnRef} onClick={()=>{focusRef.current.focus()}}>Focus</button>
            <button onClick={()=>{btnRef.current.click()}}>DuplicateFocus</button>
        </div>
    )
}

export default UseRef