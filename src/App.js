import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import RadioButton from "./components/RadioButton";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Button} from "./components/Button";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
          <Container fluid>
            <Row>
              <Col>
                <h1>Hello World</h1>
                <form>
                  <label className="submit-name">Enter candidate's name: </label>
                  <input type="text"/>
                  {button && <Button className="submit-name" buttonStyle="btn--outline">Submit</Button>}
                  <br/>
                  <label className="submit-mail">Enter candidate's e-mail: </label>
                  <input type="email"/>
                  {button && <Button className="submit-mail" buttonStyle="btn--outline">Submit</Button>}
                </form>
                <RadioButton/>
              </Col>
            </Row>
          </Container>
      </div>
    </Router>
  );
}

export default App;
