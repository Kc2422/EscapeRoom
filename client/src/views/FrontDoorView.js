import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Door.css';

const FrontDoorView = (props) => {
    
    const history = useHistory()

    const onClickRightHandler = (e) => {
        history.push("/bookshelf")
    }

    const onClickLeftHandler = (e) => {
        history.push("/painting")
    }

    return(
        <div className="">
            <div className="backgroundCabinetClosed position-relative">
                <img className="position-absolute top-0 start-50 translate-middle" src={require('../img/leftArrow.png')} alt='left arrow' onClick={onClickLeftHandler} />
                <img className="position-absolute top-0 start-100 translate-middle" src={require('../img/rightArrow.png')} alt='right arrow' onClick={onClickRightHandler}></img>
            </div>
        </div>
    )
}

export default FrontDoorView;