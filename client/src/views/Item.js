import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
// import { useRaisedShadow } from "./use-raised-shadow";



export const Item = (props) => {
    const {item} = props
    
  const y = useMotionValue(0);
//   const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item value={item} id={item} style={{   }}>
       

      <img draggable="false" src = {item} className="painting"/>
        
    </Reorder.Item>
  );
};