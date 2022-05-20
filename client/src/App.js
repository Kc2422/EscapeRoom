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

function App() {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [text, setMessages] = useState(["Initial Story"])

  const changeName = (n) => {
    setName(n)
  }

  const changeSubmitted = () => {
    setSubmitted(true)
  }

  return (
    <div className="App">
      <Navbar name = {name} submitted = {submitted}/>
      
      <Route exact path = "/">
        <Home changeName = {changeName} name = {name} setSubmitted = {changeSubmitted} />
      </Route>

      <Route exact path = "/door">

      </Route>
    </div>
  );
}

export default App;
