import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import React, { useState } from 'react'
import {
  BrowserRouter,
  useHistory,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import FrontDoorView from './views/FrontDoorView';
import BookshelfView from './views/BookshelfView';
import PaintingView from './views/PaintingView';
import LightsView from './views/LightsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion"

function App() {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [text, setMessages] = useState(["Initial Story", "you are locked in the cabin try to get out"])
  const [sidebar, setSidebar] = useState(false);
  const [solvedPuzzle1, setSolvedPuzzle1] = useState(false);
  const [hasKey, setHasKey] = useState(false)

  const showSidebar = (tf) => setSidebar(tf);

  const changeName = (n) => {
    setName(n)
  }

  const addMessage = (m) => {
    setMessages([...text,m])
  }

  const changeSubmitted = (tf) => {
    setSubmitted(tf)
  }

  return (
    <>
      <Navbar name={name} submitted={submitted} />
    <div className='needBackground'>
      <Sidebar sidebar={sidebar} text={text} />

      <Route exact path="/">
        <Home changeName={changeName} name={name} setSubmitted={changeSubmitted} showSidebar={showSidebar} />
      </Route>

      <Route exact path="/door">
        <FrontDoorView  addMessage = {addMessage}hasKey = {hasKey} solvedPuzzle1={solvedPuzzle1}/>
      </Route>

      <Route exact path="/bookshelf">
        <BookshelfView  solvedPuzzle1={solvedPuzzle1}/>
      </Route>

      <Route exact path="/paintings">
        <PaintingView sidebar={sidebar} text={text} name={name} submitted={submitted} solvedPuzzle1={solvedPuzzle1}/>
      </Route>

      <Route exact path="/lights">
        <LightsView sidebar={sidebar} text={text} name={name} submitted={submitted} solvedPuzzle1={solvedPuzzle1}/>
      </Route>
    </div>
    </>
  );
}

export default App;
