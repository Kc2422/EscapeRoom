import React, { useState, useEffect } from 'react';

const AudioButton = (props) => {
    console.log(props.audioIcon)
    return (
        <div>
            <img className="muteButton clickable position-absolute top-0 end-0" src={require('../img/sound.png')} alt="sound" onClick={props.onClickAudio}></img>
        </div>
    )
}


export default AudioButton;