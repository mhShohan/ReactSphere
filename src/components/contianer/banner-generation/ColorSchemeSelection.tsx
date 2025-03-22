interface ColorSchemeSelectionProps {
  options: Record<string, string>;
  setSelectedColorScheme: (color: string) => void;
  colorVariant: 'solid' | 'gradient';
  setColorVariant: (variant: 'solid' | 'gradient') => void;
}

const ColorSchemeSelection = ({
  options,
  setSelectedColorScheme,
  colorVariant,
  setColorVariant,
}: ColorSchemeSelectionProps) => {
  return (
    <div className='relative'>
      <div className='flex items-center justify-between mb-2'>
        <label className='text-lg font-semibold'>Color Scheme</label>
        <div className='rounded-full bg-slate-200'>
          <button
            onClick={() => setColorVariant('solid')}
            className={`p-1 w-24 font-semibold rounded-full ${
              colorVariant === 'solid' && 'bg-secondary text-white'
            }`}
          >
            Solid
          </button>
          <button
            onClick={() => setColorVariant('gradient')}
            className={`p-1 w-24 font-semibold rounded-full ${
              colorVariant === 'gradient' && 'bg-secondary text-white'
            }`}
          >
            Gradient
          </button>
        </div>
      </div>
      <div className='flex flex-wrap justify-around gap-2'>
        {Object.keys(options).map((op) => (
          <div
            key={op}
            onClick={() => setSelectedColorScheme(op)}
            className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer ${options[op]}`}
          >
            Aa
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSchemeSelection;
