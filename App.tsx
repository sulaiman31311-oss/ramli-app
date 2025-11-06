import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Figure, FigurePattern, DotValue } from './types';
import { FIGURE_LIST, ELEMENT_NAMES } from './constants';
import House from './components/House';
import Modal from './components/Modal';
import FigureDisplay from './components/FigureDisplay';
import { IZA_NAZALA_DATA } from './izaNazalaData';
import { Theme, THEMES } from './themes';
import ThemeSwitcher from './components/ThemeSwitcher';

type GenerationMethod = 'tap' | 'text';

const findFigureByPattern = (pattern: FigurePattern): Figure | null => {
  return FIGURE_LIST.find(fig => 
    fig.pattern[0] === pattern[0] &&
    fig.pattern[1] === pattern[1] &&
    fig.pattern[2] === pattern[2] &&
    fig.pattern[3] === pattern[3]
  ) || null;
};

const calculateCombination = (p1: FigurePattern, p2: FigurePattern): FigurePattern => {
  return p1.map((val, i) => {
    const sum = val + p2[i];
    return (sum % 2 === 0) ? 2 : 1;
  }) as FigurePattern;
};


const App: React.FC = () => {
  const [mothers, setMothers] = useState<FigurePattern[]>([
    [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]
  ]);
  const [chart, setChart] = useState<(Figure | null)[]>(new Array(16).fill(null));
  const [selectedHouse, setSelectedHouse] = useState<{ index: number; figure: Figure } | null>(null);
  const [generationMethod, setGenerationMethod] = useState<GenerationMethod>('tap');
  const [textInputs, setTextInputs] = useState<string[][]>(Array(4).fill(Array(4).fill('')));
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]);

  const applyTheme = useCallback((theme: Theme) => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    setCurrentTheme(theme);
    localStorage.setItem('ramli-theme-name', theme.name);
  }, []);

  useEffect(() => {
    const savedThemeName = localStorage.getItem('ramli-theme-name');
    const savedTheme = THEMES.find(t => t.name === savedThemeName) || THEMES[0];
    applyTheme(savedTheme);
  }, [applyTheme]);


  const handleGenerateChart = useCallback(() => {
    const newPatterns: FigurePattern[] = [...mothers];
    
    // Houses 5-8 (Daughters)
    newPatterns[4] = [newPatterns[0][0], newPatterns[1][0], newPatterns[2][0], newPatterns[3][0]];
    newPatterns[5] = [newPatterns[0][1], newPatterns[1][1], newPatterns[2][1], newPatterns[3][1]];
    newPatterns[6] = [newPatterns[0][2], newPatterns[1][2], newPatterns[2][2], newPatterns[3][2]];
    newPatterns[7] = [newPatterns[0][3], newPatterns[1][3], newPatterns[2][3], newPatterns[3][3]];
    
    // Houses 9-15
    newPatterns[8] = calculateCombination(newPatterns[0], newPatterns[1]);
    newPatterns[9] = calculateCombination(newPatterns[2], newPatterns[3]);
    newPatterns[10] = calculateCombination(newPatterns[4], newPatterns[5]);
    newPatterns[11] = calculateCombination(newPatterns[6], newPatterns[7]);
    newPatterns[12] = calculateCombination(newPatterns[8], newPatterns[9]);
    newPatterns[13] = calculateCombination(newPatterns[10], newPatterns[11]);
    newPatterns[14] = calculateCombination(newPatterns[12], newPatterns[13]);
    
    // House 16
    newPatterns[15] = calculateCombination(newPatterns[14], newPatterns[0]);

    const newChart = newPatterns.map(p => findFigureByPattern(p));
    setChart(newChart);
  }, [mothers]);

  const handleHouseClick = (index: number) => {
    const figure = chart[index];
    if (figure) {
      setSelectedHouse({ index, figure });
    }
  };

  const handleMotherRowClick = (motherIndex: number, rowIndex: number) => {
    const newMothers = [...mothers];
    const currentPattern = [...newMothers[motherIndex]] as FigurePattern;
    currentPattern[rowIndex] = currentPattern[rowIndex] === 1 ? 2 : 1;
    newMothers[motherIndex] = currentPattern;
    setMothers(newMothers);
  };
  
  const handleTextInputChange = (motherIndex: number, rowIndex: number, value: string) => {
    const newInputs = textInputs.map(m => [...m]);
    newInputs[motherIndex][rowIndex] = value.replace(/[^.]/g, ''); // Allow only dots
    setTextInputs(newInputs);

    if (value.length > 0) {
      const dotValue: DotValue = value.length % 2 === 0 ? 2 : 1;
      const newMothers = [...mothers];
      const currentPattern = [...newMothers[motherIndex]] as FigurePattern;
      currentPattern[rowIndex] = dotValue;
      newMothers[motherIndex] = currentPattern;
      setMothers(newMothers);
    }
  };


  const modalContent = useMemo(() => {
    if (!selectedHouse || !chart[selectedHouse.index]) return null;
    
    const { index, figure } = selectedHouse;
    
    // Madalubi (Mirror)
    const currentFigureIndexInList = FIGURE_LIST.findIndex(f => f.id === figure.id);
    const mirrorFigureDefinition = FIGURE_LIST[(currentFigureIndexInList + 6) % 16];
    
    const mirrorFigureLocationsInChart = chart.reduce<number[]>((acc, f, idx) => {
      if (f?.id === mirrorFigureDefinition.id) {
        acc.push(idx + 1);
      }
      return acc;
    }, []);

    const mirrorText = mirrorFigureLocationsInChart.length > 0
      ? `${mirrorFigureDefinition.name} (a Gida ${mirrorFigureLocationsInChart.join(' da Gida ')})`
      : `${mirrorFigureDefinition.name} (Baya cikin jadawali)`;

    // Tafiya (Journey)
    const nativeHouseIndex = FIGURE_LIST.findIndex(f => f.name === figure.name);
    const journey = ((index - nativeHouseIndex + 16) % 16) + 1;
    
    // Bunne (Buried)
    const nativeFigureForHouse = FIGURE_LIST[index];
    const buriedPattern = calculateCombination(figure.pattern, nativeFigureForHouse.pattern);
    const buriedFigure = findFigureByPattern(buriedPattern);

    // Iza Nazala
    const izaNazalaText = IZA_NAZALA_DATA[figure.name]?.[index] || "Babu bayani.";

    return (
      <div className="space-y-4 [color:var(--color-text-primary)]">
        <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-3">
          <strong className="[color:var(--color-text-secondary)]">Gida:</strong>
          <span>{index + 1}</span>

          <strong className="[color:var(--color-text-secondary)]">Tauraro:</strong>
          <span>{figure.name}</span>

          <strong className="[color:var(--color-text-secondary)]">Madalubi:</strong>
          <span>{mirrorText}</span>

          <strong className="[color:var(--color-text-secondary)]">Tafiya:</strong>
          <span>{journey === 1 ? `Yana gida (Tafiya ${journey})` : `Yayi tafiyar gidaje ${journey}`}</span>

          <strong className="[color:var(--color-text-secondary)]">Bunne:</strong>
          <span>{buriedFigure ? buriedFigure.name : 'Babu'}</span>
        </div>

        <div className="pt-4 mt-4 border-t [border-color:var(--color-border)]">
          <h3 className="text-lg font-semibold [color:var(--color-accent)] mb-2">Iza Nazala</h3>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{izaNazalaText}</p>
        </div>
      </div>
    );
  }, [selectedHouse, chart]);

  const TapperControls: React.FC = () => (
    <div className="flex flex-row gap-4 overflow-x-auto pb-4 justify-start md:justify-center">
      {mothers.map((pattern, motherIndex) => (
        <div key={motherIndex} className="[background-color:var(--color-surface)] border [border-color:var(--color-border)] rounded-lg p-2 flex-shrink-0">
          <h3 className="text-center font-bold [color:var(--color-accent)] mb-2">Uwa {motherIndex + 1}</h3>
          <FigureDisplay 
            pattern={pattern} 
            onRowClick={(rowIndex) => handleMotherRowClick(motherIndex, rowIndex)}
            interactive={true}
          />
        </div>
      ))}
    </div>
  );

  const TextControls: React.FC = () => (
     <div className="flex flex-row gap-4 overflow-x-auto pb-4 justify-start md:justify-center">
      {textInputs.map((motherInputs, motherIndex) => (
        <div key={motherIndex} className="[background-color:var(--color-surface)] border [border-color:var(--color-border)] rounded-lg p-3 space-y-2 w-48 flex-shrink-0">
          <h3 className="text-center font-bold [color:var(--color-accent)] mb-2">Uwa {motherIndex + 1}</h3>
          {motherInputs.map((value, rowIndex) => (
            <div key={rowIndex}>
              <label className="text-sm [color:var(--color-text-secondary)] block mb-1">{ELEMENT_NAMES[rowIndex]}</label>
              <input
                type="text"
                value={value}
                onChange={(e) => handleTextInputChange(motherIndex, rowIndex, e.target.value)}
                placeholder="Rubuta dugo-dugo..."
                className="w-full [background-color:var(--color-bg)] border [border-color:var(--color-border)] rounded-md p-2 [color:var(--color-text-primary)] focus:ring-2 focus:[--tw-ring-color:var(--color-accent)] focus:[border-color:var(--color-accent)]"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto p-4 font-sans">
      <header className="text-center my-6 relative">
        <div className="flex justify-center items-center">
            <h1 className="text-5xl font-bold [color:var(--color-accent)]">RAMLI</h1>
        </div>
        <p className="[color:var(--color-text-secondary)] mt-2">Kayan aikin nazarin taurari</p>
         <div className="absolute top-0 right-0">
            <ThemeSwitcher onThemeChange={applyTheme} currentThemeName={currentTheme.name} />
        </div>
      </header>
      
      <main>
        <div className="[background-color:var(--color-surface)] p-6 rounded-xl shadow-lg border [border-color:var(--color-border)] mb-8">
            <h2 className="text-2xl font-semibold [color:var(--color-text-primary)] mb-4">Zabi Hanyar Samar da Iyaye (Ummahatu)</h2>
             <div className="flex justify-center space-x-4 rtl:space-x-reverse mb-6">
                <button onClick={() => setGenerationMethod('tap')} className={`px-6 py-2 rounded-md font-semibold transition-colors ${generationMethod === 'tap' ? '[background-color:var(--color-accent)] [color:var(--color-accent-text)]' : '[background-color:var(--color-border)] hover:[background-color:var(--color-interactive-hover-bg)] [color:var(--color-text-primary)]'}`}>Ta hanyar Tabawa</button>
                <button onClick={() => setGenerationMethod('text')} className={`px-6 py-2 rounded-md font-semibold transition-colors ${generationMethod === 'text' ? '[background-color:var(--color-accent)] [color:var(--color-accent-text)]' : '[background-color:var(--color-border)] hover:[background-color:var(--color-interactive-hover-bg)] [color:var(--color-text-primary)]'}`}>Ta hanyar Rubutu</button>
            </div>
            
            {generationMethod === 'tap' ? <TapperControls /> : <TextControls />}

            <div className="text-center mt-6">
                <button 
                    onClick={handleGenerateChart}
                    className="[background-color:var(--color-accent)] hover:[background-color:var(--color-accent-hover)] [color:var(--color-accent-text)] font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-transform transform hover:scale-105"
                >
                    Haifar da Jadawali
                </button>
            </div>
        </div>

        <div className="[background-color:var(--color-surface)] p-2 md:p-6 rounded-xl shadow-lg border [border-color:var(--color-border)] relative">
          <div className="grid grid-cols-16 gap-y-2 pb-24 place-items-center">
            {/* Row 1: Houses 1-8 */}
            {chart.slice(0, 8).map((fig, i) => (
              <House key={i} number={i + 1} figure={fig} onClick={() => handleHouseClick(i)} className={`col-span-2 col-start-[${i * 2 + 1}]`} />
            ))}

            {/* Row 2: Houses 9-12 */}
            {chart.slice(8, 12).map((fig, i) => (
              <House key={i + 8} number={i + 9} figure={fig} onClick={() => handleHouseClick(i + 8)} className={`col-span-2 col-start-[${i * 4 + 2}]`} />
            ))}

            {/* Row 3: Houses 13-14 */}
            <House number={13} figure={chart[12]} onClick={() => handleHouseClick(12)} className="col-span-2 col-start-4" />
            <House number={14} figure={chart[13]} onClick={() => handleHouseClick(13)} className="col-span-2 col-start-12" />
            
            {/* Row 4: House 15 */}
            <House number={15} figure={chart[14]} onClick={() => handleHouseClick(14)} className="col-span-2 col-start-8" />
          </div>

          {/* House 16 */}
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
              <House number={16} figure={chart[15]} onClick={() => handleHouseClick(15)} />
          </div>
        </div>
      </main>

      <Modal 
        isOpen={selectedHouse !== null} 
        onClose={() => setSelectedHouse(null)} 
        title={`Bayanin Gida ${selectedHouse ? selectedHouse.index + 1 : ''}`}
      >
        {modalContent}
      </Modal>

      <footer className="text-center [color:var(--color-text-secondary)] mt-12 pb-4">
        <p>An gina shi don nazarin Ramli.</p>
      </footer>
    </div>
  );
};

export default App;