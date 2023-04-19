import React, { useState } from 'react';

export default function TextAreaComponent() {
  const [text, setText] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        console.log('Shift + Enter key pressed!');
      } else {
        console.log('Enter key pressed!');
      }
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <textarea value={text} onChange={handleChange} onKeyDown={handleKeyDown} />
  );
}
