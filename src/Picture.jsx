import React from 'react';

function Picture({
  memes,
  topText,
  bottomText,
  indexCurrentPicture,
  userImage,
}) {
  return (
    <>
      <div className="memeContainer">
        <p className="memeTitle">{topText}</p>
        {memes.length > 0 && !userImage && (
          <img
            className="meme"
            src={memes[indexCurrentPicture].url}
            alt="meme"
          />
        )}
        {userImage && (
          <img
            className="meme"
            src={URL.createObjectURL(userImage)}
            alt="meme"
          />
        )}
        <p className="memeSubtitle">{bottomText}</p>
      </div>
    </>
  );
}

export default Picture;
