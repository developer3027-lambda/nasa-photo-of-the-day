import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from 'axios';
import "./App.css";

const Wrap = styled.div`
  background: #F4D6B4;
  color: black;
  width: 425px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 6px -2px grey;
`;
const Pic = styled.img`
  width: 400px;
  height: 400px;
  object-fit: none;
`;
const Wordy = styled.p`
  display: flex;
  width: 425px;
  overflow: none
`;

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
      <Wrap>
        <h2>Some of my Favorites</h2>
          <select name='date'>
            <option value=''>Favorite?</option>
            <option value='2018-05-21'>May 21 2018</option>
          </select>
          <h3>{pic.title}</h3>
          <Pic src={pic.url} alt='amazing cosmos'></Pic>
          <Wordy>{pic.explanation}</Wordy>
          <small>{pic.date}</small>
      </Wrap>
    </div>
  );
}

export default App;
