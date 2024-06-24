import React, { FC } from 'react';
import Cell from './Cell';
import './styles.css'

interface BoardProps {
  board: string[][];
}

const Board: FC<BoardProps> = ({ board }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Cell key={colIndex} type={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
