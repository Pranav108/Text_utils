// import logo from './logo.svg';
import "./App.css";
import Cardgroup from "./components/Cardgroup";
import Navbar from "./components/Navbar";
import Textform from './components/Textform';
import React, { useState } from "react";
import AlertBox from "./components/AlertBox";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null)
  const showAlert=(type,message)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const [mode, setmode] = useState('light');
  const toggleFunc = () => {
    if (mode === "light") {
      setmode("dark");
      // showAlert("Dark","Dark Mode is Enabled");
      document.body.style.backgroundColor ='#053a88'
      document.title = 'MyApp - Dark Mode'
    } else {
      setmode("light");
      // showAlert("Dark","Light Mode is Enabled");
      document.body.style.backgroundColor ='white'
      document.title = 'MyApp - Light Mode'
    }
  };
  return (
    <Router>
      <Navbar
        title="Text-Utils"
        about="About us"
        toggleFunc={toggleFunc}
        mode={mode}
        showAlert={showAlert}
      />
      <div className="container mb-2">
      <AlertBox myAlert={alert}/>
      <Switch>
          <Route exact path="/about">
          <Cardgroup mode={mode}/> 
          </Route>
          <Route exact path="/">
          <Textform heading="Enter some text below: " mode={mode} showAlert={showAlert}/> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
