import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Picture from './Picture';
import Input from './Input';
import './index.css';

function App() {
  const url = 'https://api.imgflip.com/get_memes';
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setMemes(response.data.data.memes);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="inputContainer">
        <Input />
        <Input />
      </div>
      <Picture memes={memes} />
    </div>
  );
}

export default App;
