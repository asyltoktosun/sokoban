import React, { useState } from 'react';
import Board from './Board';

const initialBoard = [
  ['wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'empty', 'empty', 'empty', 'wall'],
                        ['wall', 'box', 'empty', 'empty', 'wall'],
  ['wall', 'wall','wall', 'box', 'empty', 'empty', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall'],
];

const Game: React.FC = () => {
  const [board, setBoard] = useState(initialBoard);

  // Add game logic here

  return (
    <div>
      <Board board={board} />
    </div>
  );
};

export default Game;
