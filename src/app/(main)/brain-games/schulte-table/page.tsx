import SchulteTableStarter from '@/components/containers/schulte-table/SchulteTableStarter';

const SchulteTablePage = () => {
  return (
    <div className='flex h-[calc(100vh-7rem)] rounded-md border border-foreground/10 p-6'>
      <div className='w-3/4 h-full'>
        <p className='text-4xl text-center font-semibold py-2'>SchulteTable</p>

        <SchulteTableStarter />
      </div>
      <div className='w-1/4 h-full border-l border-foreground/10'>
        <p className='text-base text-center font-semibold py-2'>Previous Results:</p>
      </div>
    </div>
  );
};

export default SchulteTablePage;
