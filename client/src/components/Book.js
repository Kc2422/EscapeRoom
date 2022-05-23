import React, { useState, useEffect } from 'react';
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";
import Letters from '../components/Letters';


const Book = (props) => {


    return (
        <div>
            <motion.div>
                <img style={{ width: "250%", position: "absolute", marginLeft: "-180%", marginTop: "50%", borderRadius: "5px" }} src={require('../img/OpenBook.png')} alt="background" />
                {/* <Letters /> */}

                <AnimatePresence>
                    {props.isVisible && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.75 }}
                            animate={{ opacity: 1, scale: 30 }}
                            exit={{ opcaity: 0, scale: 0 }}
                        >
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.div>
        </div>
    )
}


export default Book;
