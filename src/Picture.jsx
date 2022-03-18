import React from 'react';

function Picture({ memes, topText, bottomText }) {
  return (
    <div className="memeContainer">
      {memes.length > 0 && (
        <div>
          <p className="memeTitle">{topText}</p>
          <img className="meme" src={memes[1].url} />
          <p className="memeSubtitle">{bottomText}</p>
        </div>
      )}
    </div>
  );
}

export default Picture;
