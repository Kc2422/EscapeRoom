import { useState } from "react";
import { Animation } from "./LetterAnimation";

import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";

const Card = (props) => {
    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
        clamp: false
    });

    function handleDragEnd(event, info) {
        if (info.offset.x < -100) {
            props.setExitX(-250);
            props.setIndex(props.index + 1);
        }
        if (info.offset.x > 100) {
            props.setExitX(250);
            props.setIndex(props.index + 1);
        }
    }
    
    return (
        <motion.div
        style={{
            width: 250,
            height: 250,
            position: "absolute",
            top: 0,
            x: x,
            rotate: rotate,
            cursor: "grab"
        }}
        whileTap={{ cursor: "grabbing" }}
        drag={props.drag}
        dragConstraints={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }}
        onDragEnd={handleDragEnd}
        initial={props.initial}
        animate={props.animate}
        transition={props.transition}
        exit={{
            x: props.exitX,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 }
        }}
        >
        <Animation />
            <motion.div
                className="letter"
                style={{
                    width: 250,
                    height: 250,
                    backgroundColor: "#fff",
                    borderRadius: 30,
                    scale: scale
                }}
            />
        </motion.div>
    );
}

export default Card;