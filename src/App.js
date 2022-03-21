import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Picture from './Picture';
import Input from './Input';
import ImageInput from './ImageInput';
import './index.css';
import Buttons from './Buttons';

function App() {
  const url = 'https://api.imgflip.com/get_memes';
  const [memes, setMemes] = useState([]);
  const [topText, setTopText] = useState('Write');
  const [bottomText, setBottomText] = useState('here');
  const [indexCurrentPicture, setIndexCurrentPicture] = useState(1);
  const [userImage, setUserImage] = useState();

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
    const randomNumber = Math.floor(Math.random() * memes.length);
    setIndexCurrentPicture(randomNumber);
  };

  return (
    <div className="App">
      <h1 className="pageTitle">React Meme Generator</h1>
      <div className="inputContainer">
        <Input changeText={changeTopText} />
        <Input changeText={changeBottomText} />
        <ImageInput setUserImage={setUserImage} userImage={userImage} />
        <Buttons changePicture={changePicture} />
      </div>
      <Picture
        memes={memes}
        topText={topText}
        bottomText={bottomText}
        indexCurrentPicture={indexCurrentPicture}
        userImage={userImage}
        changePicture={changePicture}
      />
    </div>
  );
}

export default App;
