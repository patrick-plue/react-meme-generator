import React, { useState, useEffect } from 'react';

function ImageInput({ setUserImage, userImage }) {
  return (
    <div>
      <div>
        <input
          onChange={(file) => setUserImage(file.target.files[0])}
          type="file"
          accept="image/"
          className="imageInput"
        />
      </div>
    </div>
  );
}

export default ImageInput;
