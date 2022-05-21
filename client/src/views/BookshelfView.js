import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Door.css';

const BookshelfView = (props) => {
    
    const history = useHistory()
    

    const onClickRightHandler = (e) => {
        history.push("/paintings")
    }

    const onClickLeftHandler = (e) => {
        history.push("/door")
    }

    return(
        <div className="gameWindow position-relative">  
            <img className="gameBackground" src={require('../img/BookShelf.png')} alt="BookShelf"/>
            <img className="position-absolute top-50 start-0 translate-middle-y clickable" src={require('../img/leftArrow.png')} alt='left arrow' onClick={onClickLeftHandler} />
            <img className="position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/rightArrow.png')} alt='right arrow' onClick={onClickRightHandler}/>
            <img className="rug position-absolute bottom-0 start-50 translate-middle-x" src={require('../img/rug.png')} alt="rug" />
            <img className="armChair position-absolute top-50 start-50 translate-middle" src={require('../img/armchair.png')} alt="Arm Chair" />

        </div>
    )
}

export default BookshelfView;