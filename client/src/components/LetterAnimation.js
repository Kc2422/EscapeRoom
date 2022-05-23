import { useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";
import Letter from './Letter';

export function Animation() {
    const [index, setIndex] = useState(0);
    const [exitX, setExitX] = useState("100%");

    return (
        <motion.div
            style={{
                width: 150,
                height: 150,
                position: "relative"
            }}
        >
            <AnimatePresence initial={false}>
                <Letter
                    key={index + 1}
                    initial={{ scale: 0, y: 105, opacity: 0 }}
                    animate={{ scale: 0.75, y: 30, opacity: 0.5 }}
                    transition={{
                        scale: { duration: 0.2 },
                        opacity: { duration: 0.4 }
                    }}
                />
                <Letter
                    key={index}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        opacity: { duration: 0.2 }
                    }}
                    exitX={exitX}
                    setExitX={setExitX}
                    index={index}
                    setIndex={setIndex}
                    drag="x"
                />
            </AnimatePresence>
        </motion.div>
    );
}