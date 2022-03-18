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
  const [indexCurrentPicture, setIndexCurrentPicture] = useState(1);
  console.log(indexCurrentPicture);

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

  const changePicture = () => {
    if (indexCurrentPicture > memes.length) {
      setIndexCurrentPicture(1);
    } else {
      setIndexCurrentPicture((prev) => prev + 1);
    }
  };

  return (
    <div className="App">
      <h1>React Meme Generator</h1>
      <div className="inputContainer">
        <Input changeText={changeTopText} />
        <Input changeText={changeBottomText} />
      </div>
      <Buttons changePicture={changePicture} />
      <Picture
        memes={memes}
        topText={topText}
        bottomText={bottomText}
        indexCurrentPicture={indexCurrentPicture}
      />
    </div>
  );
}

export default App;
