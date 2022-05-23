import React, { useState, useEffect } from 'react';
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";
import Card from './Letter';


const Book = (props) => {


    return (
        <div>
            <img style={{ width: "90%", position: "absolute", marginLeft: "5%", marginTop: "-80%", borderRadius: "5px" }} src={require('../img/OpenBook.png')} alt="background" />
            <Card />

        </div>
    )
}


export default Book;
