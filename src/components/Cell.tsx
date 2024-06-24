import React, { FC } from 'react';
import './styles.css'

interface CellProps {
  type: string;
}

const Cell: FC<CellProps> = ({ type }) => {
  const getClassName = () => {
    switch (type) {
      case '1': return 'cell wall';
      case 'box': return 'cell box';
      case 'goal': return 'cell goal';
      case 'player': return 'cell player';
      default: return 'cell empty';
    }
  };

  return <div className={getClassName()} />;
};

export default Cell;
