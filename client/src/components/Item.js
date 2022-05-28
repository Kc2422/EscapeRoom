import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
// import { useRaisedShadow } from "./use-raised-shadow";
import Painting from '../files/pictures.wav';

export const Item = (props) => {
    const {item} = props;

  return (
    <Reorder.Item value={item} id={item}>
      <img draggable="false" src = {item} className="painting"/>
    </Reorder.Item>
  );
};