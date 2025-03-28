'use client';

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
    <div className='relative'>
      <label className='text-lg font-semibold'>Icon</label>

      <>
        <>
          <div className='flex items-center justify-between w-full p-2 border rounded'>
            <div className='flex items-center gap-2'>
              <RenderSelectedIcon size={24} />
              <p>{selectedIcon}</p>
            </div>
            <PhosphorIcons.CaretDown size={22} />
          </div>
        </>
        <div style={{ maxHeight: '200px', overflow: 'auto' }}>
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
        </div>
      </>
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
