export interface Theme {
  name: string;
  colors: {
    '--color-bg': string;
    '--color-surface': string;
    '--color-border': string;
    '--color-text-primary': string;
    '--color-text-secondary': string;
    '--color-accent': string;
    '--color-accent-hover': string;
    '--color-accent-text': string;
    '--color-interactive-hover-bg': string;
  };
}

export const THEMES: Theme[] = [
  {
    name: 'Default Dark',
    colors: {
      '--color-bg': '#1a202c', // slate-900
      '--color-surface': '#1e293b', // slate-800
      '--color-border': '#334155', // slate-700
      '--color-text-primary': '#e2e8f0', // slate-200
      '--color-text-secondary': '#94a3b8', // slate-400
      '--color-accent': '#f59e0b', // amber-500
      '--color-accent-hover': '#d97706', // amber-600
      '--color-accent-text': '#1e293b', // slate-800
      '--color-interactive-hover-bg': '#334155', // slate-700
    },
  },
  {
    name: 'Midnight Blue',
    colors: {
      '--color-bg': '#111827', // gray-900
      '--color-surface': '#1f2937', // gray-800
      '--color-border': '#374151', // gray-700
      '--color-text-primary': '#f3f4f6', // gray-100
      '--color-text-secondary': '#9ca3af', // gray-400
      '--color-accent': '#38bdf8', // sky-400
      '--color-accent-hover': '#0ea5e9', // sky-500
      '--color-accent-text': '#111827', // gray-900
      '--color-interactive-hover-bg': '#374151', // gray-700
    },
  },
  {
    name: 'Forest Green',
    colors: {
      '--color-bg': '#052e16', // green-950
      '--color-surface': '#166534', // green-800
      '--color-border': '#15803d', // green-700
      '--color-text-primary': '#dcfce7', // green-100
      '--color-text-secondary': '#86efac', // green-300
      '--color-accent': '#a3e635', // lime-400
      '--color-accent-hover': '#84cc16', // lime-500
      '--color-accent-text': '#052e16', // green-950
      '--color-interactive-hover-bg': '#14532d', // green-900
    },
  },
  {
    name: 'Crimson Red',
    colors: {
      '--color-bg': '#450a0a', // red-950
      '--color-surface': '#7f1d1d', // red-900
      '--color-border': '#991b1b', // red-800
      '--color-text-primary': '#fecaca', // red-200
      '--color-text-secondary': '#fca5a5', // red-300
      '--color-accent': '#f43f5e', // rose-500
      '--color-accent-hover': '#e11d48', // rose-600
      '--color-accent-text': '#fff',
      '--color-interactive-hover-bg': '#991b1b', // red-800
    },
  },
   {
    name: 'Royal Purple',
    colors: {
      '--color-bg': '#2e1065', // purple-950
      '--color-surface': '#3b0764', // purple-900
      '--color-border': '#581c87', // purple-800
      '--color-text-primary': '#e9d5ff', // purple-200
      '--color-text-secondary': '#d8b4fe', // purple-300
      '--color-accent': '#d946ef', // fuchsia-500
      '--color-accent-hover': '#c026d3', // fuchsia-600
      '--color-accent-text': '#fff',
      '--color-interactive-hover-bg': '#581c87', // purple-800
    },
  },
  {
    name: 'Ocean Teal',
    colors: {
      '--color-bg': '#042f2e', // teal-950
      '--color-surface': '#115e59', // teal-800
      '--color-border': '#0f766e', // teal-700
      '--color-text-primary': '#ccfbf1', // teal-100
      '--color-text-secondary': '#5eead4', // teal-300
      '--color-accent': '#22d3ee', // cyan-400
      '--color-accent-hover': '#06b6d4', // cyan-500
      '--color-accent-text': '#042f2e', // teal-950
      '--color-interactive-hover-bg': '#134e4a', // teal-900
    },
  },
  {
    name: 'Sunset Orange',
    colors: {
      '--color-bg': '#431407', // orange-950
      '--color-surface': '#7c2d12', // orange-900
      '--color-border': '#9a3412', // orange-800
      '--color-text-primary': '#fed7aa', // orange-200
      '--color-text-secondary': '#fdba74', // orange-300
      '--color-accent': '#f97316', // orange-500
      '--color-accent-hover': '#ea580c', // orange-600
      '--color-accent-text': '#fff',
      '--color-interactive-hover-bg': '#9a3412', // orange-800
    },
  },
   {
    name: 'Classic Light',
    colors: {
      '--color-bg': '#f1f5f9', // slate-100
      '--color-surface': '#ffffff',
      '--color-border': '#cbd5e1', // slate-300
      '--color-text-primary': '#1e293b', // slate-800
      '--color-text-secondary': '#475569', // slate-600
      '--color-accent': '#4f46e5', // indigo-600
      '--color-accent-hover': '#4338ca', // indigo-700
      '--color-accent-text': '#ffffff',
      '--color-interactive-hover-bg': '#e2e8f0', // slate-200
    },
  },
  {
    name: 'Rose Gold',
    colors: {
      '--color-bg': '#4c0519',
      '--color-surface': '#881337',
      '--color-border': '#9f1239',
      '--color-text-primary': '#ffe4e6',
      '--color-text-secondary': '#fecdd3',
      '--color-accent': '#f472b6',
      '--color-accent-hover': '#ec4899',
      '--color-accent-text': '#4c0519',
      '--color-interactive-hover-bg': '#9f1239',
    },
  },
  {
    name: 'High Contrast',
    colors: {
      '--color-bg': '#ffffff',
      '--color-surface': '#f3f4f6', // gray-100
      '--color-border': '#9ca3af', // gray-400
      '--color-text-primary': '#000000',
      '--color-text-secondary': '#4b5563', // gray-600
      '--color-accent': '#1d4ed8', // blue-700
      '--color-accent-hover': '#1e40af', // blue-800
      '--color-accent-text': '#ffffff',
      '--color-interactive-hover-bg': '#e5e7eb', // gray-200
    },
  },
];
