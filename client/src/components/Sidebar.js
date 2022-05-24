import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(props) {
  const { sidebar, text } = props

  useEffect(() => {

    var objDiv = document.getElementById("sideb");
  objDiv.scrollTop = objDiv.scrollHeight;
  },[text])

  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"} id="sideb">
      {/* <img className="muteButton" src={require(props.audioIcon)} alt="sound" onClick={props.onClickAudio}></img> */}

      <ul>

        {text.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

    </nav>
  );
}

export default Sidebar;