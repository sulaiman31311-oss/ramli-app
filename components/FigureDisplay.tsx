import React from 'react';
import { FigurePattern, DotValue } from '../types';

interface FigureDisplayProps {
  pattern: FigurePattern;
  onRowClick?: (rowIndex: number) => void;
  interactive?: boolean;
}

const Dot: React.FC = () => (
  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
);

const DotRow: React.FC<{ count: DotValue }> = ({ count }) => (
  <div className="flex justify-center items-center h-3 w-4">
    {count === 1 ? <Dot /> : <div className="flex justify-between w-full"><Dot /><Dot /></div>}
  </div>
);

const FigureDisplay: React.FC<FigureDisplayProps> = ({ pattern, onRowClick, interactive = false }) => {
  return (
    <div className="flex flex-col items-center space-y-0.5 p-1">
      {pattern.map((dotValue, index) => (
        <div 
          key={index}
          onClick={() => onRowClick && onRowClick(index)}
          className={interactive ? 'cursor-pointer p-0.5 rounded-md hover:bg-slate-700' : ''}
        >
          <DotRow count={dotValue} />
        </div>
      ))}
    </div>
  );
};

export default FigureDisplay;