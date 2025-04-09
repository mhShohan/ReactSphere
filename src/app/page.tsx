import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Homepage() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-[url(/assets/bg-2.jpg)] bg-cover'>
      <div className='flex flex-col items-center justify-center gap-y-4'>
        <h1 className='text-9xl font-extrabold'>
          <span className='text-blue-400'>React</span>
          <span className='text-amber-100'>Sphere</span>
        </h1>
        <div className='w-2/3'>
          <h5 className='text-2xl text-center text-amber-100 font-semibold'>
            A collection of small yet powerful React components, demonstrating different concepts
            and ideas.
          </h5>
          <p className='text-md px-4 mt-1 text-center text-amber-100 font-medium'>
            ReactSphere is an interactive and open-source web application designed to showcase
            various React components that I have learned and built. This project serves as a
            personal learning hub, allowing developers and learners to explore, understand, and
            reuse different React concepts in one place.
          </p>
        </div>
        <Link href='/profile' passHref>
          <Button
            variant='secondary'
            className='cursor-pointer flex items-center font-semibold rounded bg-blue-400 hover:bg-amber-100 hover:text-blue-600 w-46 gap-x-2 px-6'
          >
            Get Start <ArrowRight size={24} className='font-semibold' />
          </Button>
        </Link>
      </div>
    </div>
  );
}
