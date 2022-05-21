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
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [text, setMessages] = useState(["Initial Story", "you are locked in the cabin try to get out", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus mauris a diam maecenas sed enim. Nisi vitae suscipit tellus mauris a diam maecenas sed. Vitae sapien pellentesque habitant morbi tristique. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Non arcu risus quis varius quam quisque. Nunc sed augue lacus viverra vitae congue. Id semper risus in hendrerit gravida rutrum quisque non. Venenatis tellus in metus vulputate eu. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Suspendisse potenti nullam ac tortor vitae. Venenatis urna cursus eget nunc scelerisque. Gravida cum sociis natoque penatibus et. Nec nam aliquam sem et tortor consequat id porta nibh.Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.Nibh nisl condimentum id venenatis a condimentum.Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.Mi tempus imperdiet nulla malesuada pellentesque elit.Lectus magna fringilla urna porttitor rhoncus dolor.Volutpat blandit aliquam etiam erat.Risus commodo viverra maecenas accumsan.Enim nunc faucibus a pellentesque sit amet porttitor eget.Et magnis dis parturient montes nascetur ridiculus mus mauris.Diam donec adipiscing tristique risus nec feugiat"])
  const [sidebar, setSidebar] = useState(false);


  const showSidebar = (tf) => setSidebar(tf);

  const changeName = (n) => {
    setName(n)
  }

  const changeSubmitted = (tf) => {
    setSubmitted(tf)
  }

  return (
    <div >
      <Sidebar sidebar={sidebar} text={text} />
      <Navbar name={name} submitted={submitted} />

      <Route exact path="/">
        <Home changeName={changeName} name={name} setSubmitted={changeSubmitted} showSidebar={showSidebar} />
      </Route>

      <Route exact path="/door">
        <FrontDoorView />
      </Route>
    </div>
  );
}

export default App;
