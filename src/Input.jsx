import React from 'react';

function Input({ changeText, defaultText }) {
  return (
    <div>
      <form action="">
        <input
          className="input"
          type="text"
          onChange={(e) => changeText(e.target.value)}
          value={defaultText}
        />
      </form>
    </div>
  );
}

export default Input;
