import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Door.css';
import Lights from '../components/Lights';
import Riddle from '../components/Riddle';
import Keypad from '../components/Keypad';
import { motion, AnimatePresence } from "framer-motion";

const LightsView = (props) => {

    const [isLightsVisible, setLightsVisible] = useState(false);
    const [isRiddleVisible, setIsRiddleVisible] = useState(false);
    const [isKeyPadVisible, setIsKeyPadVisible] = useState(false);
    const history = useHistory();
    const [code, setCode] = useState("")
    const [safeOpen, setSafeOpen] = useState(false)


    const onClickRightHandler = (e) => {
        history.push("/door")
    }

    const onClickLeftHandler = (e) => {
        history.push("/paintings")
    }

    const onClickSafe = (e) => {
        console.log("you clicked safe!");
        setIsKeyPadVisible(true);
    }

    const reset = (e) => {
        setLightsVisible(false);
        setIsRiddleVisible(false);
        setIsKeyPadVisible(false);
    }

    const onClickCabinet = (e) => {
        if(props.cabinetKeyVisible === false) {
            setIsRiddleVisible(true);
            props.addMessage("The key opened the drawer! You found a note inside.")
        } else {
            props.addMessage("All the drawers are locked. It looks like you need a key to open it.")
        }
    }

    const onSubmitCode = (e) => {
        e.preventDefault()
        if(code === "1234"){
            setSafeOpen(true)
        }else{
            props.addMessage("The safe won't open")
        }
    }



    return (
        <div className="gameWindow position-relative">
            <img className="gameBackground" src={require('../img/Wall.jpg')} alt="Lights Wall" onClick={reset} />

<<<<<<< HEAD
            <img className="safe position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/safe1.png')} alt='Safe' onClick={onClickSafe} />
=======
            <img useMap='#safe' className="safe position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/safe1.png')} alt='Safe' onClick={onClickSafe} />
>>>>>>> main

            <img className="rug position-absolute bottom-0 start-50 translate-middle-x" src={require('../img/rug.png')} alt="rug" />

            <img className="drawer position-absolute top-50 start-50 translate-middle clickable" src={require('../img/drawer.png')} alt="drawer" onClick={onClickCabinet}/>
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

            {isRiddleVisible ? <Riddle /> : null}

            {isKeyPadVisible ? <Keypad /> : null}

          
    
        </div>
    )
}

export default LightsView;