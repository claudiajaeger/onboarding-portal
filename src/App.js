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

  //function that resizes and display new size of button on mobile
  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false)
      } else {
          setButton(true);
      }
  };
  //handles the button on mobile to not show button anymore in mobile/tablet on refresh
  useEffect(() => {
      showButton();
  }, []);

  window.addEventListener("resize", showButton); //resize button event

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
                {/* Form that handles submit by input of name and email  */}
                <form>
                  <label className="name">Enter candidate's name: </label>
                  <input type="text"/>
                  {/* If button is true return button component and button style */}
                  {button && <Button className="name" buttonStyle="btn--outline">Submit</Button>}
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
