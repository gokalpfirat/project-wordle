import React, { useState } from 'react';

function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    addGuess(guess);
    setGuess('');
  }
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        required
        disabled={disabled}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
