import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [pic, setPic] = useState({});

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=7WdPhWpxKxiwRwJjWkJMleXMT2l2gh5bJpQ629we')
    .then(response => {
      setPic(response.data);
    })
    .catch(error => {
      console.log('axios call: ', error);
    })
  },[])

  return (
    <div className="App">
      <div>
        <h2>Some of my Favorites</h2>
          <select name='date'>
            <option value=''>Favorite?</option>
            <option value='2018-05-21'>May 21 2018</option>
          </select>
          <h3>{pic.title}</h3>
          <p><img src={pic.url} alt='amazing cosmos'></img></p>
          <p>{pic.explanation}</p>
          <small>{pic.date}</small>
      </div>
    </div>
  );
}

export default App;
