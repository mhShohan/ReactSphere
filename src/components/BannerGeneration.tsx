'use client';
import { Button } from '@/components/ui/button';
import {
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
} from '@chakra-ui/react';
import { useToJpeg } from '@hugocxl/react-to-image';
import * as PhosphorIcons from '@phosphor-icons/react';
import * as Icons from '@phosphor-icons/react/dist/ssr';
import { CSSProperties, useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import { useSectionBanner } from './Sections';

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
  const { setBase64Banner, setSelectedSectionBanner } = useSectionBanner();

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

  const colorOptions = colorVariant === 'solid' ? colorScheme : gradientColorSchema;

  const RenderSelectedIcon = (Icons as any)[selectedIcon];

  const [_, convertToSvg, _ref] = useToJpeg<HTMLDivElement>({
    quality: 1,
    selector: '#generate-banner',
    onSuccess: (data) => {
      setBase64Banner(data);
      setSelectedSectionBanner();
      onClose();
    },
  });

  useEffect(() => {
    WebFont.load({
      google: {
        families: fonts.map((font) => font.name),
      },
    });
  }, []);

  return (
    <Modal size='full' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className='relative p-6 rounded-2xl'>
        <div className='absolute top-4 right-4'>
          <ModalCloseButton size='lg' className='rounded-full' />
        </div>
        <ModalBody>
          <div className='flex mt-16'>
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
                <Input
                  placeholder='Section name'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  // onFocus={(e) => setTitle('')}
                />
              </div>
              <div>
                <label className='text-lg font-semibold'>Typography</label>
                <Select
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
                </Select>
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

              <Button variant='success' onClick={convertToSvg}>
                <PhosphorIcons.Checks size={16} color='white' className='mr-2' />
                Generate and Apply
              </Button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BannerGeneration;

const IconSelection = ({ setSelectedIcon, selectedIcon }) => {
  const [search, setSearch] = useState('');

  const validIconNames = Object.keys(Icons).filter(
    (key) => !['SSRBase', 'IconContext', 'SSR'].includes(key)
  ) as (keyof typeof Icons)[];

  const filteredIconNames = validIconNames.filter((iconName) =>
    iconName?.toLowerCase().includes(search?.toLowerCase())
  );

  const RenderSelectedIcon = (Icons as any)[selectedIcon];

  return (
    <div className='relative'>
      <label className='text-lg font-semibold'>Icon</label>

      <Popover>
        <PopoverTrigger>
          <div className='flex items-center justify-between w-full p-2 border rounded'>
            <div className='flex items-center gap-2'>
              <RenderSelectedIcon size={24} />
              <p>{selectedIcon}</p>
            </div>
            <PhosphorIcons.CaretDown size={22} />
          </div>
        </PopoverTrigger>
        <PopoverContent width={472} sx={{ maxHeight: '200px', overflow: 'auto' }}>
          <div className='flex flex-wrap m-4 justify-evenly'>
            {filteredIconNames.map((icon, i) => (
              <div
                key={i}
                onClick={() => setSelectedIcon(icon)}
                className='p-2 rounded cursor-pointer hover:bg-slate-200'
              >
                <IconRender iconName={icon} />
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

const ColorSchemeSelection = ({
  options,
  setSelectedColorScheme,
  colorVariant,
  setColorVariant,
}) => {
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

interface IconRenderProps {
  iconName: any;
  iconSize?: number;
}

const IconRender = ({ iconName, iconSize = 32 }: IconRenderProps) => {
  const IconToRender = (PhosphorIcons as any)[iconName];

  if (!IconToRender) {
    return <span>No icon available</span>;
  }

  const IconComponent = IconToRender as React.ElementType;

  return (
    <>
      <IconComponent size={iconSize} />
    </>
  );
};
