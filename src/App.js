import react, { useState, useEffect } from 'react';
import './App.css';
import Square from './square';
import Predictor from './gamePredictor';
import predictor from './gamePredictor';

function App() {
  let initalState = Array(9).fill('');
  const [gameState, updateGameState] = useState(initalState);
  const [userValue, updateUserValue] = useState('X');

  const onClick = (index) => {
    console.log('button clicked');
    const string = Array.from(gameState);
    string[index] = userValue === 'X' ? 'O' : 'X';
    updateUserValue(string[index]);
    updateGameState(string);
  }

  useEffect(() => {
    const winner = predictor(gameState);
    if (winner) {
      const player = winner === 'X' ? 'Player 2' : 'Player 1'
      window.alert(`${player} is the winner...`)
    }
    if ((winner === null) && (gameState.indexOf('') === -1)) {
      window.alert('Game tied !!!');
    }
  }, [gameState]);

  return (
    <div className="App">
      <p>TIC-TAC-TOE</p>
      <div>
        <Square onClick={() => { onClick(0) }} value={gameState[0]}></Square>
        <Square onClick={() => { onClick(1) }} value={gameState[1]}></Square>
        <Square onClick={() => { onClick(2) }} value={gameState[2]}></Square>
      </div>
      <div>
        <Square onClick={() => { onClick(3) }} value={gameState[3]}></Square>
        <Square onClick={() => { onClick(4) }} value={gameState[4]}></Square>
        <Square onClick={() => { onClick(5) }} value={gameState[5]}></Square>
      </div>
      <div>
        <Square onClick={() => { onClick(6) }} value={gameState[6]}></Square>
        <Square onClick={() => { onClick(7) }} value={gameState[7]}></Square>
        <Square onClick={() => { onClick(8) }} value={gameState[8]}></Square>
      </div>
      <div>
      </div>
      <button className='reset-btn' onClick={() => { updateGameState(initalState) }}>{'New Game'}</button>
    </div>

  );
}
export default App;
