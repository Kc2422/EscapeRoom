import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(props) {
const {sidebar, text} = props

    return (
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
       <ul>

        {text.map((item, i) => <li>{item}</li>)}
       </ul>
       
      </nav>
    );
  }
  
  export default Sidebar;