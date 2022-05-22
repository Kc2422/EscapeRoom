import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Door.css';

const LightsView = (props) => {
    
    const history = useHistory()
    

    const onClickRightHandler = (e) => {
        history.push("/door")
    }

    const onClickLeftHandler = (e) => {
        history.push("/paintings")
    }

    const onClickLightSwitch = (e) => {
        console.log("you clicked switch!");
    }

    const onClickLightSafe = (e) => {
        console.log("you clicked safe!");
    }



    return(
        <div className="gameWindow position-relative">  
            <img className="gameBackground" src={require('../img/Wall.jpg')} alt="Lights Wall" />

            <img className="arrow position-absolute top-50 start-0 translate-middle-y clickable" src={require('../img/leftArrow.png')} alt='left arrow' onClick={onClickLeftHandler} />
            <img className="arrow position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/rightArrow.png')} alt='right arrow' onClick={onClickRightHandler}/>
            <img className="lights position-absolute top-0 end-0 translate-middle-y clickable" src={require('../img/lightSwitches.png')} alt='Light Switches' onClick={onClickLightSwitch} />
            <img className="safe position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/safe1.png')} alt='Safe' onClick={onClickLightSafe} />
            <img className="rug position-absolute bottom-0 start-50 translate-middle-x" src={require('../img/rug.png')} alt="rug" />
            <img className="drawer position-absolute top-50 start-50 translate-middle clickable" src={require('../img/drawer.png')} alt="drawer" />
            
            {/* <img className="table position-absolute top-50 start-50 translate-middle" src={require('../img/table.jpg')} alt="table" /> */} 
            {/* for some reason can't set the width for the table */}
            
        </div>
    )
}

export default LightsView;