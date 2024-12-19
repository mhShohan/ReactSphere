import { Outlet } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-[300px] bg-teal-900'></div>
      <div className='flex-grow bg-cyan-100'>
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
