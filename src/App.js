import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
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
                  <label>Enter candidate's name: </label>
                  <input type="text"/>
                  {button && <Button buttonStyle="btn--outline">Submit</Button>}
                </form>
              </Col>
            </Row>
          </Container>
      </div>
    </Router>
  );
}

export default App;
