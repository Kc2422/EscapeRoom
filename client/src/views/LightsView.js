import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Door.css';
import Lights from '../components/Lights';
import { motion, AnimatePresence } from "framer-motion";

const LightsView = (props) => {
    const [isLightsVisible, setLightsVisible] = useState(false)
    const history = useHistory()


    const onClickRightHandler = (e) => {
        history.push("/door")
    }

    const onClickLeftHandler = (e) => {
        history.push("/paintings")
    }

    const onClickLightSafe = (e) => {
        console.log("you clicked safe!");
    }

    const reset = (e) => {
        setLightsVisible(false);
    }



    return (
        <div className="gameWindow position-relative">
            <img className="gameBackground" src={require('../img/Wall.jpg')} alt="Lights Wall" onClick={reset} />

            <img className="safe position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/safe1.png')} alt='Safe' onClick={onClickLightSafe} />
            <img className="rug position-absolute bottom-0 start-50 translate-middle-x" src={require('../img/rug.png')} alt="rug" />
            <img className="drawer position-absolute top-50 start-50 translate-middle clickable" src={require('../img/drawer.png')} alt="drawer" />
            <img className="arrow position-absolute top-50 start-0 translate-middle-y clickable" src={require('../img/leftArrow.png')} alt='left arrow' onClick={onClickLeftHandler} />
            <img className="arrow position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/rightArrow.png')} alt='right arrow' onClick={onClickRightHandler} />
            <motion.div className='lights position-absolute top-0 end-0 translate-middle-y clickable' onClick={() => setLightsVisible(true)}>
                <AnimatePresence>
                    {isLightsVisible && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.75 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                        >
                            <Lights inOrder={props.inOrder} addMessage={props.addMessage} SolvedPuzzleLights={props.SolvedPuzzleLights} text={props.text}/>
                        </motion.div>
                    )}

                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default LightsView;