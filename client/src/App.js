import logo from './logo.svg';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';
import Home from './views/Home';
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  useHistory,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import FrontDoorView from './views/FrontDoorView';
import BookshelfView from './views/BookshelfView';
import PaintingView from './views/PaintingView';
import LightsView from './views/LightsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";

import HTMLFlipBook from "react-pageflip";

import Success from './views/Success';
import BestTimes from './views/BestTimes';
import TestMap from './views/TestMap';

import Triller from './files/Triller.m4a';
import { Howl, Howler } from 'howler';
import AudioButton from './components/AudioButton';


const Beach = require("./img/ArrFrameBeach.png")
const Flower = require("./img/ArrFrameFlower.png")
const Moon = require("./img/ArrFrameMoon.png")
const Mountain = require("./img/ArrFrameMountain.png")




function App() {
  const { Howl, Howler } = require('howler');
  Howler.volume(0.05);
  const [name, setName] = useState(localStorage.getItem('name'))
  const [submitted, setSubmitted] = useState(localStorage.getItem('submitted'))
  const [text, setMessages] = useState(["Initial Story", "you are locked in the cabin try to get out"])

  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [counter, setCounter] = useState(0);

  const [sidebar, setSidebar] = useState(localStorage.getItem('sidebar'));
  const [pictures, setPictures] = useState([Beach, Flower, Moon, Mountain])
  const [correctOrder, setOrder] = useState([Mountain, Flower, Beach, Moon])
  const [inOrder, setInOrder] = useState(false)


  const [hasKey, setHasKey] = useState(false)

  const [solvedLights, setSolvedLights] = useState(false);

  const [cabinetKeyVisible, setCabinetKeyVisible] = useState(true);
  const [finalKeyVisible, setFinalKeyVisible] = useState(true);

  const grabFinalKey = () => {
    setFinalKeyVisible(false);
  }

  const showSidebar = (tf) => {
    setSidebar(tf);
    localStorage.setItem('sidebar', tf)
  }

  const changeName = (n) => {
    setName(n)
  }

  const addMessage = (m) => {
    setMessages([...text, m])
  }

  const changeSubmitted = (tf) => {
    setSubmitted(tf)
  }

  const changePics = (values) => {
    setPictures(values)
  }


  const isInOrder = (tf) => {
    setInOrder(tf)
  }


  const SolvedPuzzleLights = (s) => {
    setSolvedLights(s);
  }

  const onClickKeyHandler = (e) => {
    addMessage("You found a key! You added it to your inventory.");
    setCabinetKeyVisible(false);
  }

  useEffect(() => {
    localStorage.setItem('sidebar', sidebar)
  }, [sidebar])

  useEffect(() => {
    localStorage.setItem('name', name)
  }, [name])

  useEffect(() => {
    localStorage.setItem('submitted', submitted)
  }, [submitted])


  useEffect(() => {
    let intervalId;

    if (submitted) {
      intervalId = setInterval(() => {


        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 1);

      }, 1000)
    }
    return () => clearInterval(intervalId);

  }, [submitted, counter])


  let sound = null;
  let audioIcon = "'./img/sound.png'";
  const onClickAudio = (e) => {
    if (sound != null) {
      sound.stop();
      sound.unload();
      sound = null;
      audioIcon = "'./img/mute.png'";
    } else {
      sound = new Howl({
        src: [Triller],
        loop: true,
      });
      sound.play();
    }
  }

  return (
    <>

      <Navbar name={name} submitted={submitted} />

      <Sidebar sidebar={sidebar} text={text} audioIcon={audioIcon} onClickAudio={onClickAudio} />
      <div className='needBackground'>
        <Switch>
          <Route exact path="/">
            <Home changeName={changeName} name={name} setSubmitted={changeSubmitted} showSidebar={showSidebar} />
          </Route>

          <Route exact path="/door">
            <FrontDoorView onClickKeyHandler={onClickKeyHandler} cabinetKeyVisible={cabinetKeyVisible} addMessage={addMessage} hasKey={hasKey} solvedLights={solvedLights} name={name} minute={minute} second={second} />
          </Route>

          <Route exact path="/bookshelf">
            <BookshelfView addMessage={addMessage} SolvedPuzzleLights={SolvedPuzzleLights} text={text} solvedLights={solvedLights} sidebar={sidebar} name={name} submitted={submitted} />
          </Route>

          <Route exact path="/paintings">
            <PaintingView pictures={pictures} solvedLights={solvedLights} correctOrder={correctOrder}
              changePics={changePics} setInOrder={isInOrder}
              addMessage={addMessage} />
          </Route>

          <Route exact path="/lights">
            <LightsView finalKeyVisible={finalKeyVisible} grabFinalKey={grabFinalKey} cabinetKeyVisible={cabinetKeyVisible} inOrder={inOrder} addMessage={addMessage} SolvedPuzzleLights={SolvedPuzzleLights} text={text} solvedLights={solvedLights} sidebar={sidebar} name={name} submitted={submitted} />
          </Route>


          <Route exact path="/success">
            <Success haskey={hasKey} name={name} second={second} minute={minute} changeSubmitted={changeSubmitted} showSidebar={showSidebar} />
          </Route>
          <Route exact path="/cheater">

          </Route>

          <Route exact path="/times">
            <BestTimes />
          </Route>

          <Route exact path="/test">
            <TestMap />
          </Route>
        </Switch>
        <AudioButton audioIcon={audioIcon} onClickAudio={onClickAudio} />

      </div>

    </>
  );
}

export default App;
