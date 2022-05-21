import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Door.css';

const LightsView = (props) => {
    
    const history = useHistory()
    

    const onClickRightHandler = (e) => {
        history.push("/door")
    }

    const onClickLeftHandler = (e) => {
        history.push("/painting")
    }

    return(
        <div className="gameWindow position-relative">  
            <img className="gameBackground" src={require('../img/Wall.jpg')} alt="Lights Wall"/>
            <img className="position-absolute top-50 start-0 translate-middle-y" src={require('../img/leftArrow.png')} alt='left arrow' onClick={onClickLeftHandler} />
            <img className="position-absolute top-50 end-0 translate-middle-y" src={require('../img/rightArrow.png')} alt='right arrow' onClick={onClickRightHandler}/>
            <img className="rug position-absolute bottom-0 start-50 translate-middle-x" src={require('../img/rug.png')} alt="rug" />
            
        </div>
    )
}

export default LightsView;