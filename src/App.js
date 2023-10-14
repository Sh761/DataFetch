
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const {Data1, setData} = useState('')
  const getData = () => {
    axios.get('https://dummyjson.com/users')
    .then(response => {
      console.log(response.data.content)
      setData(response.data.content)
    }).catch(err => {
      console.log(err)

    })
  }
  return (
    <div className="App">
      <button onClick = {getData}>Get Data</button>
      {Data1 && <p>{Data1}</p> }
    </div>
  );
}

export default App;
