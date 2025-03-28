'use client';

import { Button } from '@/components/ui/button';
import { useToJpeg } from '@hugocxl/react-to-image';
import * as PhosphorIcons from '@phosphor-icons/react';
import * as Icons from '@phosphor-icons/react/dist/ssr';
import { CSSProperties, useEffect, useState } from 'react';
import ColorSchemeSelection from './ColorSchemeSelection';
import IconSelection from './IconSelection';

const fontWeights = [
  { fontWeight: 400, type: 'light' },
  { fontWeight: 500, type: 'normal' },
  { fontWeight: 600, type: 'medium' },
  { fontWeight: 700, type: 'semibold' },
  { fontWeight: 800, type: 'bold' },
];

const fonts = [
  { name: 'Arial', value: 'Arial, sans-serif' },
  // { name: 'Bokor', value: "'Bokor', system-ui" },
  { name: 'Courier New', value: "'Courier New', monospace" },
  { name: 'Georgia', value: 'Georgia, serif' },
  // { name: 'Josefin Sans', value: "'Josefin Sans', sans-serif" },
  // { name: 'Parkinsans', value: "'Parkinsans', sans-serif" },
  // { name: 'Prompt', value: "'Prompt', sans-serif" },
  // { name: 'Protest Revolution', value: "'Protest Revolution', sans-serif" },
  { name: 'Roboto', value: "'Roboto', sans-serif" },
  // { name: 'Sevillana', value: "'Sevillana', cursive" },
  { name: 'Times New Roman', value: "'Times New Roman', serif" },
  // { name: 'Ubuntu', value: "'Ubuntu', sans-serif" },
  { name: 'Urbanist', value: 'Urbanist' },
];

const BannerGeneration = ({ isOpen, onClose, sectionName }: any) => {
  const [bannerStyles, setBannerStyles] = useState<CSSProperties>({
    fontSize: 40,
    fontWeight: 400,
    fontFamily: 'Urbanist',
  });
  const [title, setTitle] = useState(sectionName ?? 'Section Name');
  const [iconSize, setIconSize] = useState(50);
  const [colorVariant, setColorVariant] = useState<'solid' | 'gradient'>('solid');
  const [selectedIcon, setSelectedIcon] = useState('Image');
  const [selectedColorScheme, setSelectedColorScheme] = useState('zinc');

  useEffect(() => {
    if (isOpen && sectionName) {
      setTitle(sectionName);
    }
  }, [isOpen, sectionName]);

  const colorScheme = {
    zinc: 'bg-zinc-100 text-zinc-600',
    green: 'bg-green-100 text-green-600',
    red: 'bg-red-100 text-red-600',
    orange: 'bg-orange-100 text-orange-600',
    amber: 'bg-amber-100 text-amber-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    lime: 'bg-lime-100 text-lime-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    teal: 'bg-teal-100 text-teal-600',
    cyan: 'bg-cyan-100 text-cyan-600',
    blue: 'bg-blue-100 text-blue-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    violet: 'bg-violet-100 text-violet-600',
    purple: 'bg-purple-100 text-violet-600',
  };

  const gradientColorSchema = {
    zinc: 'bg-gradient-to-r from-zinc-100 to-green-200 text-zinc-600',
    green: 'bg-gradient-to-r from-green-100 to-red-200 text-green-600',
    red: 'bg-gradient-to-r from-red-100 to-orange-200 text-red-600',
    orange: 'bg-gradient-to-r from-orange-100 to-purple-200 text-orange-600',
    amber: 'bg-gradient-to-r from-amber-100 to-lime-200 text-amber-600',
    lime: 'bg-gradient-to-r from-lime-100 to-purple-200 text-lime-600',
    yellow: 'bg-gradient-to-r from-yellow-100 to-red-200 text-yellow-600',
    emerald: 'bg-gradient-to-r from-blue-100 to-violet-200 text-emerald-600',
    teal: 'bg-gradient-to-r from-teal-100 to-indigo-200 text-teal-600',
    cyan: 'bg-gradient-to-r from-cyan-100 to-purple-200 text-cyan-600',
    blue: 'bg-gradient-to-r from-blue-100 to-indigo-200 text-blue-600',
    indigo: 'bg-gradient-to-r from-indigo-100 to-purple-200 text-indigo-600',
    violet: 'bg-gradient-to-r from-violet-100 to-purple-200 text-violet-600',
    purple: 'bg-gradient-to-r from-purple-100 to-green-200 text-violet-600',
  };

  const colorOptions: any = colorVariant === 'solid' ? colorScheme : gradientColorSchema;

  const RenderSelectedIcon = (Icons as any)[selectedIcon];

  const [_, convertToSvg, _ref] = useToJpeg<HTMLDivElement>({
    quality: 1,
    selector: '#generate-banner',
    onSuccess: (data: any) => {
      console.log(data, 'generate-banner');
      onClose();
    },
  });

  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: fonts.map((font) => font.name),
  //     },
  //   });
  // }, []);

  return (
    <>
      <div className='relative '>
        <>
          <div className='flex'>
            <div className={`w-2/3`}>
              <div
                id='generate-banner'
                className={`w-full h-[500px] gap-4 px-10 rounded flex items-center justify-center ${colorOptions[selectedColorScheme]}`}
              >
                <RenderSelectedIcon size={iconSize} />
                <h4 style={bannerStyles}>{title}</h4>
              </div>
              <div className='flex items-center justify-between h-20 p-4 mt-2 rounded-md shadow-2xl'>
                <div className='flex items-center gap-6 px-4 py-1 border rounded'>
                  <label className='text-lg font-semibold'>Icon Size</label>
                  <div className='flex items-center gap-2'>
                    <button
                      onClick={() => setIconSize((p) => p - 5)}
                      className='flex items-center justify-center w-6 h-6 border rounded-full border-slate-500'
                    >
                      <PhosphorIcons.Minus size={14} />
                    </button>
                    <p>{iconSize}</p>
                    <button
                      onClick={() => setIconSize((p) => p + 5)}
                      className='flex items-center justify-center w-6 h-6 border rounded-full border-slate-500'
                    >
                      <PhosphorIcons.Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className='flex items-center gap-6 px-4 py-1 border rounded'>
                  <label className='text-lg font-semibold'>Font Size</label>
                  <div className='flex items-center gap-2'>
                    <button
                      onClick={() =>
                        setBannerStyles((prev) => ({
                          ...prev,
                          fontSize: (prev.fontSize as number) - 5,
                        }))
                      }
                      className='flex items-center justify-center w-6 h-6 border rounded-full border-slate-500'
                    >
                      <PhosphorIcons.Minus size={14} />
                    </button>
                    <p>{bannerStyles.fontSize}</p>
                    <button
                      onClick={() =>
                        setBannerStyles((prev) => ({
                          ...prev,
                          fontSize: (prev.fontSize as number) + 5,
                        }))
                      }
                      className='flex items-center justify-center w-6 h-6 border rounded-full border-slate-500'
                    >
                      <PhosphorIcons.Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-1/3 gap-4 p-8 mx-8 rounded-md shadow-2xl'>
              <div>
                <label className='text-lg font-semibold'>Section name</label>
                <input
                  placeholder='Section name'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  // onFocus={(e) => setTitle('')}
                />
              </div>
              <div>
                <label className='text-lg font-semibold'>Typography</label>
                <select
                  defaultValue='Urbanist'
                  onChange={(e) =>
                    setBannerStyles((prev) => ({
                      ...prev,
                      fontFamily: e.target.value,
                    }))
                  }
                >
                  {fonts.map((font) => (
                    <option key={font.name} value={font.value}>
                      {font.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className='text-lg font-semibold'>Font Weight</label>
                <div className='flex gap-2'>
                  {fontWeights.map((fw) => (
                    <div
                      key={fw.fontWeight}
                      onClick={() =>
                        setBannerStyles((prev) => ({
                          ...prev,
                          fontWeight: fw.fontWeight,
                        }))
                      }
                      className={`w-full h-20 cursor-pointer text-slate-600 rounded border-2 flex flex-col justify-center items-center ${
                        bannerStyles.fontWeight === fw.fontWeight
                          ? 'border-green-400'
                          : 'border-slate-200'
                      }`}
                    >
                      <h4 className={`font-${fw.type}`}>Aa</h4>
                      <p className={`font-${fw.type} -mt-2 text-sm capitalize`}>{fw.type}</p>
                    </div>
                  ))}
                </div>
              </div>
              <IconSelection selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
              <ColorSchemeSelection
                options={colorOptions}
                colorVariant={colorVariant}
                setColorVariant={setColorVariant}
                setSelectedColorScheme={setSelectedColorScheme}
              />
            </div>
          </div>

          <div className='flex items-center justify-end mt-4 mr-8'>
            <div className='flex items-center justify-end gap-2 mt-4'>
              <Button variant='secondary' onClick={onClose}>
                Cancel
              </Button>

              <Button variant='secondary' onClick={convertToSvg}>
                <PhosphorIcons.Checks size={16} color='white' className='mr-2' />
                Generate and Apply
              </Button>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default BannerGeneration;
