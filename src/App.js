import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Picture from './Picture';
import Input from './Input';
import Buttons from './Buttons';
import './index.css';

function App() {
  const url = 'https://api.imgflip.com/get_memes';
  const [memes, setMemes] = useState([]);
  const [topText, setTopText] = useState('Write');
  const [bottomText, setBottomText] = useState('here');
  console.log('toptext', topText);

  // useEffects

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

  // functions

  const changeTopText = (input) => {
    setTopText(input);
  };

  const changeBottomText = (input) => {
    setBottomText(input);
  };

  return (
    <div className="App">
      <h1>React Meme Generator</h1>
      <div className="inputContainer">
        <Input changeText={changeTopText} />
        <Input changeText={changeBottomText} />
      </div>
      <Buttons />
      <Picture memes={memes} topText={topText} bottomText={bottomText} />
    </div>
  );
}

export default App;
