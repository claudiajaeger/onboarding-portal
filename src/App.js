import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Button} from "./components/Button";
import './App.css';


function App() {
  const [button, setButton] = useState(true);

  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false)
      } else {
          setButton(true);
      }
  };
  useEffect(() => {
      showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/"/>
          </Routes>
          <h1>Hello World</h1>
          {button && <Button buttonStyle="btn--outline">Submit name</Button>}
      </div>
    </Router>
  );
}

export default App;
