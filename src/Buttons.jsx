import React from 'react';

function Buttons({ changePicture }) {
  return (
    <div className="buttonsContainer">
      <button className="btn" onClick={() => changePicture()}>
        Change Picture
      </button>
      <button className="btn">Generate</button>
    </div>
  );
}

export default Buttons;
