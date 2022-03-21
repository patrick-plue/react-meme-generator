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

  useEffect(() => {
    domtoimage.toJpeg(createdMeme.current, { quality: 0.95 }).then(
      function (dataUrl) {
        setUserMemeDownload(dataUrl);
      },
      [memes]
    );
  });

  return (
    <>
      <a id="downloadLink" download="my-image.jpg" href={userMemeDownload}>
        Download
      </a>

      <div className="memeContainer" ref={createdMeme}>
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
