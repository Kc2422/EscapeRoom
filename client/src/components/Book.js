import React, { useState, useEffect } from 'react';
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";
import Card from './Letter';
import { Example } from "./Letter";


const Book = (props) => {
    const Animation = () => <Example />;

    return (
        <div style={{position:'relative'}}>
            <div style={{ width: "100%", position: "absolute", marginLeft: "25%", marginTop: "-85%"}}>
                <Animation />
            </div>
        </div>

    )
}


export default Book;
