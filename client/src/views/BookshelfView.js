import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Book from '../components/Book';
import './Door.css';
import { motion, AnimatePresence } from "framer-motion";




const BookshelfView = (props) => {

    const history = useHistory();

    const [isLettersVisible, setisLettersVisible] = useState(false);
    const [isBook, setisBook] = useState(true);
    
    // const reset = ()=> {
    //     setisLettersVisible(false);
    //     setisBook(true);
    // }

    const onClickRightHandler = (e) => {
        history.push("/paintings")
    }

    const onClickLeftHandler = (e) => {
        history.push("/door")
    }

    const book= () => {
        setisLettersVisible(true);
        setisBook(false); 
        console.log("you clicked me" + isLettersVisible)
    }

    return (
        <div className="gameWindow position-relative">
            <img className="gameBackground" src={require('../img/BookShelf.png')} alt="BookShelf" />
            <img className="arrow position-absolute top-50 start-0 translate-middle-y clickable" src={require('../img/leftArrow.png')} alt='left arrow' onClick={onClickLeftHandler} />
            <img className="arrow position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/rightArrow.png')} alt='right arrow' onClick={onClickRightHandler} />
            <img className="rug position-absolute bottom-0 start-50 translate-middle-x" src={require('../img/rug.png')} alt="rug" onClick={() => props.addMessage("You lift up the rug but find nothing. This rug has definitely seen better days and it smells disgusting!")} />
            <img className="armChair position-absolute top-50 start-50 translate-middle" src={require('../img/armchair.png')} alt="Arm Chair" onClick={() => props.addMessage("You are exhausted! This chair looks does look comfy, but better get back to finding a way out!")} />
            {isBook && (
                <img className="book position-absolute top-50 start-0 translate-middle-y clickable" src={require('../img/book.png')} alt="Book" onClick={book} />
            )}

            {isLettersVisible && (
                <Book />
            )}

        </div>
    )
}

export default BookshelfView;