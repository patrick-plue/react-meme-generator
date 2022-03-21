import React from 'react';

function Buttons({ changePicture }) {
  return (
    <button className="btn" onClick={() => changePicture()}>
      Change Picture
    </button>
  );
}

export default Buttons;
