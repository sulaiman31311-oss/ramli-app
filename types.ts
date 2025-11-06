
export type DotValue = 1 | 2;

export type FigurePattern = [DotValue, DotValue, DotValue, DotValue];

export interface Figure {
  id: number;
  name: string;
  pattern: FigurePattern;
}
