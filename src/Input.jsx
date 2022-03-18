import React from 'react';

function Input({ changeText }) {
  return (
    <div>
      <form action="">
        <input type="text" onChange={(e) => changeText(e.target.value)} />
      </form>
    </div>
  );
}

export default Input;
