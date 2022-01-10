import './App.css';
import {useState} from "react";
import {Row, Col, Container, Table} from 'react-bootstrap';


function App() {
  const [number, setNumber] = useState("");
  const [emoji, setEmoji] = useState("");


  // Submit button functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    let numArray = number.split(" ");
    let currSum = 0;

    // Add all numbers in the array
    for (let i = 0; i < numArray.length; i++) {
      currSum += parseInt(numArray[i]);
    }

    showEmoji(currSum);
  }


  // Displays emoji based on sum
  const showEmoji = (currSum) => {

    if (currSum < 10) setEmoji("😕");
    else if (currSum < 40) setEmoji("🙃");
    else if (currSum < 70) setEmoji("😀");
    else if (currSum < 100) setEmoji("😂");
    else if (currSum > 100) setEmoji("🤣");
    else setEmoji("");

    setTimeout(clearEmoji, 3000);
  }


  // Clears emoji after timeout
  const clearEmoji = () => {
    setEmoji("");
  }


  return (
    <div className="App">
      <Container>
        <h1>Housing App Q1</h1>
        <p>Please enter a list of numbers, separated by one space (e.g., 1 2 3 4 5)</p>
        
        <Row> 

          {/* Column for inputting numbers and displaying emoji */}
          <Col style={{marginTop: "40px"}}>
            <form onSubmit={handleSubmit}>
              <label>
                Numbers: &nbsp;
                <input type="text" placeholder="1 2 3 4 5" name="number" value={number} onChange={e => setNumber(e.target.value)} />
              </label>
            </form>
            <br/>
            <p>{emoji !== "" ? "You are" : ""}</p>
            <p style={{fontSize:"100px"}}>{emoji}</p>
          </Col>

          {/* Column for the legend */}
          <Col>
            <h5>Legend</h5>
            <Table>
              <thead>
                <tr>
                  <th>Emoji</th>
                  <th>Sum range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>😕</td>
                  <td>Less than 10</td>
                </tr>
                <tr>
                  <td>🙃</td>
                  <td>10-39</td>
                </tr>
                <tr>
                  <td>😀</td>
                  <td>40-69</td>
                </tr>
                <tr>
                  <td>😂</td>
                  <td>70-99</td>
                </tr>
                <tr>
                  <td>🤣</td>
                  <td>100 or greater</td>
                </tr>
              </tbody>
            </Table>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
