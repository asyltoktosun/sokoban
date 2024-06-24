import React from 'react';
import Board from './components/Board';

const initialBoard = [
  ['empty', 'empty', 'empty', 'empty', '1', '1', '1', '1', '1', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty','empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty', '1', 'empty', 'empty', 'empty', '1', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty','empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty', '1', 'box', 'empty', 'empty', '1', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty','empty', 'empty'],
  ['empty', 'empty', '1', '1', '1', 'box', 'empty', 'empty', '1', '1','empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty','empty'],
  ['empty', 'empty', '1', 'empty', 'empty','empty', 'empty', 'box','box', '1','empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty','empty'],
  ['1', '1', '1', 'empty', '1', 'empty', '1', '1', 'empty', '1','empty', 'empty', 'empty', '1', '1','1', '1', '1', '1'],
  ['1', 'empty', 'player', 'empty', '1', 'empty', '1', '1','empty', '1','1', '1', '1', '1', 'empty','empty', 'goal', 'goal', '1'],
  ['1','empty', 'box','box', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty','empty', 'empty', 'empty','empty', 'goal', 'goal', '1'],
  ['1', '1', '1', '1', '1', 'empty', '1', '1', '1', 'empty', '1', 'empty', '1', '1', 'empty','empty', 'goal', 'goal', '1'],
  ['empty', 'empty', 'empty','empty', '1', 'empty', 'empty', 'empty', 'empty','empty',  '1', '1',  '1', '1', '1', '1', '1', '1', '1'],
  ['empty', 'empty', 'empty','empty', '1', '1', '1',  '1', '1', '1', '1', 'empty', 'empty', 'empty', 'empty','empty', 'empty', 'empty','empty' ]
];

function App() {
  return (  
    <div className="App">
      <Board board={initialBoard} />
    </div>
  );
}

export default App;
