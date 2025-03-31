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
    <div className='relative mt-4'>
      <div className='flex items-center justify-between mb-2'>
        <label className='text-lg font-semibold'>Color Scheme</label>
        <div className='rounded-full bg-slate-200'>
          <button
            onClick={() => setColorVariant('solid')}
            className={`p-1 w-24 font-semibold rounded-full ${
              colorVariant === 'solid' ? 'bg-teal-900 text-white' : 'text-teal-900'
            }`}
          >
            Solid
          </button>
          <button
            onClick={() => setColorVariant('gradient')}
            className={`p-1 w-24 font-semibold rounded-full ${
              colorVariant === 'gradient' ? 'bg-teal-900 text-white' : 'text-teal-900'
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
            className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${options[op]}`}
          >
            Aa
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSchemeSelection;
