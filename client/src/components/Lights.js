import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import OnSwitch from "../img/OnSwitch.png";
import OffSwitch from "../img/OffSwitch.png";

const Lights = (props) => {
    const [light1, setLight1] = useState(false);
    const [light2, setLight2] = useState(false);
    const [light3, setLight3] = useState(false);
    const [light4, setLight4] = useState(false);

    const correctCode = [true, true, true, false];

    useEffect(() => {
        const lights = [light1, light2, light3, light4];
        for(let i = 0; i < lights.length; i++){
            if (lights[i] !== correctCode[i]){
                console.log("incorrect")
                props.addMessage("Hmmm. The light switches do not look to be in the right order.");
                return
            }
        }
        props.SolvedPuzzleLights(true);
        props.addMessage("You heard something open! Take a look around to see what it was.");
        return
    },[light1, light2, light3, light4])
    

    return(
        <div>
            <motion.div>
                <img style={{ width:"250%", position:"absolute", marginLeft:"-180%", marginTop:"50%", borderRadius:"5px"}} src={require('../img/LightsCloseUp.png')} alt="background"/>
                <img id="1" style={{ width:"50%", position:"absolute", marginLeft:"-170%", marginTop:"90%", borderRadius:"5px"}} src={light1 ? OnSwitch : OffSwitch} alt='light switch' onClick={()=> setLight1(!light1)}/>
                <img id="2" style={{ width:"50%", position:"absolute", marginLeft:"-110%", marginTop:"90%", borderRadius:"5px"}} src={light2 ? OnSwitch : OffSwitch} alt='light switch' onClick={()=> setLight2(!light2)}/>
                <img id="3" style={{ width:"50%", position:"absolute", marginLeft:"-50%", marginTop:"90%", borderRadius:"5px"}} src={light3 ? OnSwitch : OffSwitch} alt='light switch' onClick={()=> setLight3(!light3)}/>
                <img id="4" 
                style={{ width:"50%", position:"absolute", marginLeft:"10%", marginTop:"90%", borderRadius:"5px"}} src={light4 ? OnSwitch : OffSwitch} alt='light switch' onClick={()=> setLight4(!light4)}/>

                <AnimatePresence>
                    {props.isVisible && (
                        <motion.div
                            initial={{opacity:0, scale:0.75}}
                            animate={{opacity:1, scale:30}}
                            exit={{opcaity:0, scale:0}}
                        >
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.div>
        </div>
    )
}

export default Lights;