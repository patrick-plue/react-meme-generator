import React from 'react';

function Buttons({ changePicture, text }) {
  return (
    <button className="btn" onClick={() => changePicture()}>
      {text}
    </button>
  );
}

export default Buttons;
