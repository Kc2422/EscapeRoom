import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Door.css';

const FrontDoorView = (props) => {
    const {addMessage, hasKey, solvedLights, name, minute, second, counter} = props
    const history = useHistory()
    
    

    const onClickRightHandler = (e) => {
        history.push("/bookshelf")
    }

    const onClickLeftHandler = (e) => {
        history.push("/lights")
    }

    const clickLock = (e) => {
        if(hasKey){
            axios.post('http://localhost:8000/api/user', {name: `${name}`, timeTaken: `${minute} minutes ${second} seconds `, seconds: counter})
            .then(res => console.log(res))
            .catch(err => console.log(err))
            history.push('/success')
        }else{
            addMessage("The door is locked, you need a key")
        }
        
    }


    return(
        <div className="gameWindow position-relative">  
            <img className="gameBackground" src={require(solvedLights ? '../img/DoorWithOpenCabinet.png' : '../img/DoorWithClosedCabinet.png')} alt="Front Door"/>
            <img className="arrow position-absolute top-50 start-0 translate-middle-y clickable" src={require('../img/leftArrow.png')} alt='left arrow' onClick={onClickLeftHandler} />
            <img className="arrow position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/rightArrow.png')} alt='right arrow' onClick={onClickRightHandler}/>
            <img className="rug position-absolute bottom-0 start-50 translate-middle-x" src={require('../img/rug.png')} alt="rug" />
            <img className="lock position-absolute top-0 start-0 translate-middle-y clickable" src={require("../img/lock.png")} alt="lock" onClick={clickLock}/>

            {props.solvedLights && props.cabinetKeyVisible ?
                <img className="key position-absolute top-50 end-0 translate-middle-y clickable" src={require("../img/key.png")} alt="key" onClick={props.onClickKeyHandler}/> 
                : null
            }

        </div>
    )
}

export default FrontDoorView;