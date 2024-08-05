import React from "react";
import NavBar from "./NavBar";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

function ContactPage(){

    return(
        <div>
            <NavBar/>
            <div style={{display:"grid",placeContent:"center",background:"aqua"}}>
                <h1>Contact Page</h1>
                <label>Facebook</label>
                <Link to="https://www.facebook.com/BesantTechnologies/" target="blank">  <FaFacebook/> </Link>
                <label>Instagram</label>
                <Link to="https://www.instagram.com/besant_technologies/"> <AiOutlineInstagram/> </Link>
            </div>
        </div>
    )
}

export default ContactPage;