import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Door.css';
import { Reorder } from "framer-motion";
import { Item } from "./Item";

const BookshelfView = (props) => {
    const { pictures} = props
    const [items, setItems] = useState(pictures)
    const history = useHistory()

    useEffect(() => {
        setItems(pictures)
    }, [props])

    useEffect(() => {
        
    })


    const onClickRightHandler = (e) => {
        history.push("/lights")
    }

    const onClickLeftHandler = (e) => {
        history.push("/bookshelf")
    }


    

    return(
        <div className="gameWindow position-relative">  
            <img className="gameBackground" src={require('../img/PaintingsWall.png')} alt="Paintings Wall"/>
            <img className="arrow position-absolute top-50 start-0 translate-middle-y clickable" src={require('../img/leftArrow.png')} alt='left arrow' onClick={onClickLeftHandler} />
            <img className="arrow position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/rightArrow.png')} alt='right arrow' onClick={onClickRightHandler}/>

            <img className="rug position-absolute bottom-0 start-50 translate-middle-x" src={require('../img/rug.png')} alt="rug" />

            {/* NEED a MAP of ARRAY of Paintings. Change index as we click and drop */}
            <Reorder.Group axis="x" onReorder={setItems} values={items}>
                <div className='paintings '>

                {items.map((item) => (
                    <Item key={item} item={item} ></Item>
                ))}
                </div>

            </Reorder.Group>
        </div>
    )
}

export default BookshelfView;