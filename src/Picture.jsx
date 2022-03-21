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

  const [fontSizeTitle, setfontSizeTitle] = useState(30);
  const [fontSizeSubtitle, setfontSizeSubtitle] = useState(30);

  useEffect(() => {
    domtoimage.toJpeg(createdMeme.current, { quality: 0.95 }).then(
      function (dataUrl) {
        setUserMemeDownload(dataUrl);
      },
      [memes]
    );
  });

  function changFontSizeTitle(value) {
    setfontSizeTitle((prev) => prev + value);
  }

  function changFontSizeSubTitle(value) {
    setfontSizeSubtitle((prev) => prev + value);
  }

  return (
    <>
      <a id="downloadLink" download="my-image.jpg" href={userMemeDownload}>
        Download
      </a>
      <div className="fontsizeButtons">
        <button onClick={() => changFontSizeTitle(5)}>increase</button>
        <button onClick={() => changFontSizeTitle(-5)}>decrease</button>
      </div>
      <div className="memeContainer" ref={createdMeme}>
        <p style={{ fontSize: `${fontSizeTitle}pt` }} className="memeTitle">
          {topText}
        </p>
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
        <p
          style={{ fontSize: `${fontSizeSubtitle}pt` }}
          className="memeSubtitle"
        >
          {bottomText}
        </p>
      </div>
      <div className="fontsizeButtons">
        <button onClick={() => changFontSizeSubTitle(5)}>increase</button>
        <button onClick={() => changFontSizeSubTitle(-5)}>decrease</button>
      </div>
    </>
  );
}

export default Picture;
