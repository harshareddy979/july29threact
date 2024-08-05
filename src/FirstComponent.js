import React from "react";
import App from "./App";
import "./firstComponent.css"

function FirstComponent(){

    return(
        <div>

            {/* <h1 className="header">this is first component</h1> */}
            {/* <SecondComponent/> */}
            <App />
        </div>
    )
}

export function SecondComponent(){

    return(
        <div>
            <h1>this is second component</h1>
        </div>
    )
}

export default FirstComponent
