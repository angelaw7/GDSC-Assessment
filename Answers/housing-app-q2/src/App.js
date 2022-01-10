import "./App.css";
import { useState } from "react";
import { Row, Container } from "react-bootstrap";
import React from "react";


function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState("");


  // Submit button and store sum functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    setSum(parseInt(number1) + parseInt(number2));
    localStorage.setItem(Date.now(), sum);
  };

  
  return (
    <div className="App">
      <Container style={{ width: "40%" }}>
        <h1>Housing App Q2</h1>
        <p>Please enter two numbers</p>

        <form onSubmit={handleSubmit}>
          <Row>
            <label>
              Number 1: &nbsp;
              <input
                type="text"
                placeholder="1"
                name="num1"
                value={number1}
                onChange={(e) => setNumber1(e.target.value)}
              />
            </label>
          </Row>
          <Row>
            <label>
              Number 2: &nbsp;
              <input
                type="text"
                placeholder="2"
                name="num2"
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
              />
            </label>
          </Row>
          <Row style={{ width: "50%", margin: "auto", marginTop: "40px" }}>
            <input type="submit" name="submit" />
          </Row>
        </form>
        <br />

        <p>{sum !== "" ? `Saved ${sum} in local storage` : ""}</p>
      </Container>
    </div>
  );
}

export default App;
