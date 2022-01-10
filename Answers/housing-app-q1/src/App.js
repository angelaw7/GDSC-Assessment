import './App.css';
import {useState} from "react";


function App() {
  const [number, setNumber] = useState("");
  const [emoji, setEmoji] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let numArray = number.split(" ");
    let currSum = 0;

    for (let i = 0; i < numArray.length; i++) {
      currSum += parseInt(numArray[i]);
    }
    console.log(currSum);


  }


  return (
    <div className="App">
      <h1>Housing App Q1</h1>
      <p>Please enter a list of numbers, separated by one space (e.g., 1 2 3 4 5)</p>
      <form onSubmit={handleSubmit}>
        <label>
          Number:
          <input type="text" placeholder="number" name="number" value={number} onChange={e => setNumber(e.target.value)} />

        </label>
      </form>
      
    </div>
  );
}

export default App;
