import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import React, {useState} from 'react'
import {
  BrowserRouter,
  useHistory,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [text, setMessages] = useState(["Initial Story", "you are locked in the cabin try to get out"])
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = (tf) => setSidebar(tf);

  const changeName = (n) => {
    setName(n)
  }

  const changeSubmitted = (tf) => {
    setSubmitted(tf)
  }

  return (
    <div className="">
      <Sidebar sidebar = {sidebar} text = {text}/>
      <Navbar name = {name} submitted = {submitted}/>

      <Route exact path = "/">
        <Home changeName = {changeName} name = {name} setSubmitted = {changeSubmitted} showSidebar = {showSidebar}/>
      </Route>

      <Route exact path = "/door">

      </Route>
    </div>
  );
}

export default App;
