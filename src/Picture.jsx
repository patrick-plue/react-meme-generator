import React from 'react';

function Picture({ memes }) {
  if (memes) {
    console.log(memes[0]);
  }
  return (
    <div className="memeContainer">
      {memes.length > 0 && (
        <div>
          <p className="memeTitle">Hello!</p>
          <img className="meme" src={memes[1].url} />
          <p className="memeSubtitle">you!</p>
        </div>
      )}
    </div>
  );
}

export default Picture;
