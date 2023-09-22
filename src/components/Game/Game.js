import React, { useState } from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState('running');
  const [guesses, setGuesses] = useState([]);
  function addGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {gameStatus === 'won' && (
        <Banner status="happy">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {guesses.length === 1 ? '1 guess' : `${guesses.length} guesses`}
            </strong>
            .
          </p>
        </Banner>
      )}
      {gameStatus === 'lost' && (
        <Banner status="sad">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
      <GuessInput addGuess={addGuess} disabled={gameStatus !== 'running'} />
    </>
  );
}

export default Game;
