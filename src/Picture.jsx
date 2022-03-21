import React, { useEffect, useRef, useState } from 'react';
import domtoimage from 'dom-to-image';

function Picture({
  memes,
  topText,
  bottomText,
  indexCurrentPicture,
  userImage,
  changePicture,
}) {
  const createdMeme = useRef();
  const [userMemeDownload, setUserMemeDownload] = useState();
  if (createdMeme) {
    console.log(createdMeme.current);
  }

  const [fontSize, setfontSize] = useState(30);
  const [pictureSize, setPictureSize] = useState(300);

  useEffect(() => {
    domtoimage.toJpeg(createdMeme.current, { quality: 0.95 }).then(
      function (dataUrl) {
        setUserMemeDownload(dataUrl);
      },
      [memes]
    );
  });

  function changeFontSize(value) {
    setfontSize((prev) => prev + value);
  }

  function changePictureSize(value) {
    setPictureSize((prev) => prev + value);
  }

  return (
    <>
      <div className="btnContainer">
        <div className="fontsizeButtons">
          <label>font size</label>
          <button className="btn" onClick={() => changeFontSize(-5)}>
            -
          </button>
          <button className="btn" onClick={() => changeFontSize(5)}>
            +
          </button>
        </div>
        <div className="pictureSizeButtons">
          <label>picture size</label>
          <button className="btn" onClick={() => changePictureSize(-50)}>
            -
          </button>
          <button className="btn" onClick={() => changePictureSize(+50)}>
            +
          </button>
        </div>
      </div>
      <div className="memeContainer" ref={createdMeme}>
        <p style={{ fontSize: `${fontSize}pt` }} className="memeTitle">
          {topText}
        </p>
        {memes.length > 0 && !userImage && (
          <img
            className="meme"
            src={memes[indexCurrentPicture].url}
            alt="meme"
            style={{ height: `${pictureSize}pt` }}
          />
        )}
        {userImage && (
          <img
            className="meme"
            src={URL.createObjectURL(userImage)}
            alt="meme"
          />
        )}
        <p style={{ fontSize: `${fontSize}pt` }} className="memeSubtitle">
          {bottomText}
        </p>
      </div>
      <a id="downloadLink" download="my-image.jpg" href={userMemeDownload}>
        Download
      </a>
    </>
  );
}

export default Picture;
