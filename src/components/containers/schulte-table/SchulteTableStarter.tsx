import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

const SchulteTableStarter = () => {
  return (
    <div className='flex justify-center mt-6'>
      <div className='w-[400px] flex flex-col gap-2 h-[230px] rounded-sm border border-foreground/10 px-6 py-8'>
        <div className='flex justify-between items-center'>
          <label className='text-md font-medium'>Table Size</label>
          <Select defaultValue='5'>
            <SelectTrigger className='w-[120px]'>
              <SelectValue placeholder='Select Table Size' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {[5, 6, 7, 8, 9, 10].map((size) => (
                  <SelectItem key={size} value={`${size}`}>
                    {size} x {size}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='flex justify-between items-center '>
          <label className='text-md font-medium'>Table Theme</label>
          <Select defaultValue='Multi Color'>
            <SelectTrigger className='w-[120px]'>
              <SelectValue placeholder='Select Table Theme' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {['Classic', 'Black Red', 'Multi Color'].map((theme) => (
                  <SelectItem key={theme} value={`${theme}`}>
                    {theme}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='flex justify-between items-center '>
          <label className='text-md font-medium'>Shuffle Table on click</label>
          <Switch />
        </div>

        <Button className='mt-4'>Start Game</Button>
      </div>
    </div>
  );
};

export default SchulteTableStarter;
