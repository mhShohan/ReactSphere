'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import * as PhosphorIcons from '@phosphor-icons/react';
import * as Icons from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

interface IconSelectionProps {
  setSelectedIcon: (icon: string) => void;
  selectedIcon: string;
}

const IconSelection = ({ setSelectedIcon, selectedIcon }: IconSelectionProps) => {
  const [search, setSearch] = useState('');

  const validIconNames = Object.keys(Icons).filter(
    (key) => !['SSRBase', 'IconContext', 'SSR'].includes(key)
  ) as (keyof typeof Icons)[];

  const filteredIconNames = validIconNames.filter((iconName) =>
    iconName?.toLowerCase().includes(search?.toLowerCase())
  );

  const RenderSelectedIcon = (Icons as any)[selectedIcon];

  return (
    <div className='flex flex-col mt-2'>
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
        <PopoverContent className='w-[450px]'>
          <div className='h-56 overflow-y-auto'>
            <div className='flex w-full flex-wrap justify-evenly'>
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
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default IconSelection;

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
