import React from 'react';

function Picture({ memes, topText, bottomText, indexCurrentPicture }) {
  return (
    <>
      {memes.length > 0 && (
        <div className="memeContainer">
          <p className="memeTitle">{topText}</p>
          <img className="meme" src={memes[indexCurrentPicture].url} />
          <p className="memeSubtitle">{bottomText}</p>
        </div>
      )}
    </>
  );
}

export default Picture;
