import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Door.css';

const FrontDoorView = (props) => {
    const {addMessage, hasKey, solvedPuzzle1} = props
    const history = useHistory()
    

    const onClickRightHandler = (e) => {
        history.push("/bookshelf")
    }

    const onClickLeftHandler = (e) => {
        history.push("/lights")
    }

    const clickLock = (e) => {
        if(hasKey){
            history.push('/success')
        }else{
            addMessage("The door is locked, you need a key")
        }
        
    }

    return(
        <div className="gameWindow position-relative">  
            <img className="gameBackground" src={require(props.solvedPuzzle1 ? '../img/DoorWithOpenCabinet.png' : '../img/DoorWithClosedCabinet.png')} alt="Front Door"/>
            <img className="position-absolute top-50 start-0 translate-middle-y clickable" src={require('../img/leftArrow.png')} alt='left arrow' onClick={onClickLeftHandler} />
            <img className="position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/rightArrow.png')} alt='right arrow' onClick={onClickRightHandler}/>
            <img className="rug position-absolute bottom-0 start-50 translate-middle-x" src={require('../img/rug.png')} alt="rug" />
            <img className="lock clickable" src={require("../img/lock.png")} alt="lock" onClick={clickLock}/>
        </div>
    )
}

export default FrontDoorView;