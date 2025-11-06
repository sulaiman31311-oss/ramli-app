
import { Figure } from './types';

export const FIGURE_LIST: Figure[] = [
  { id: 1, name: "Kausaji", pattern: [1, 1, 2, 1] },
  { id: 2, name: "Rahika", pattern: [1, 2, 2, 2] },
  { id: 3, name: "Rayya", pattern: [2, 1, 1, 1] },
  { id: 4, name: "Bayada", pattern: [2, 2, 1, 2] },
  { id: 5, name: "Dariki", pattern: [1, 1, 1, 1] },
  { id: 6, name: "Kabla Karija", pattern: [1, 2, 1, 2] },
  { id: 7, name: "Humra", pattern: [2, 1, 2, 2] },
  { id: 8, name: "Inkis", pattern: [2, 2, 2, 1] },
  { id: 9, name: "Nasara Karija", pattern: [1, 1, 2, 2] },
  { id: 10, name: "Iskafi", pattern: [1, 2, 2, 1] },
  { id: 11, name: "Ijtima'i", pattern: [2, 1, 1, 2] },
  { id: 12, name: "Nasara Dakila", pattern: [2, 2, 1, 1] },
  { id: 13, name: "Sa'ili", pattern: [1, 1, 1, 2] },
  { id: 14, name: "Nakiyya", pattern: [1, 2, 1, 1] },
  { id: 15, name: "Alkali", pattern: [2, 1, 2, 1] },
  { id: 16, name: "Jama'a", pattern: [2, 2, 2, 2] },
];

export const FIGURES_BY_NAME: Record<string, Figure> = FIGURE_LIST.reduce((acc, fig) => {
  acc[fig.name] = fig;
  return acc;
}, {} as Record<string, Figure>);

export const ELEMENT_NAMES = ["Nari (Wuta)", "Hawai (Iska)", "Mai (Ruwa)", "Turabi (Kasa)"];
