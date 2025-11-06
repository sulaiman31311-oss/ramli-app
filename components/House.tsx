import React from 'react';
import { Figure } from '../types';
import FigureDisplay from './FigureDisplay';

interface HouseProps {
  number: number;
  figure: Figure | null;
  onClick: () => void;
  className?: string;
}

const House: React.FC<HouseProps> = ({ number, figure, onClick, className }) => {
  return (
    <div 
      onClick={onClick}
      className={`flex flex-col items-center p-1 sm:p-2 [background-color:var(--color-surface)] border [border-color:var(--color-border)] rounded-lg shadow-md hover:[background-color:var(--color-interactive-hover-bg)] hover:[border-color:var(--color-accent)] transition-all cursor-pointer w-11 sm:w-20 min-h-[72px] sm:min-h-[110px] ${className || ''}`}
    >
      <span className="text-xs font-bold [color:var(--color-accent)]">{number}</span>
      {figure ? (
        <>
          <FigureDisplay pattern={figure.pattern} />
          <span className="text-[9px] leading-tight sm:text-xs text-center [color:var(--color-text-primary)] mt-1 flex-shrink-0">{figure.name}</span>
        </>
      ) : (
        <div className="flex-grow flex items-center justify-center [color:var(--color-text-secondary)] text-lg">?</div>
      )}
    </div>
  );
};

export default House;