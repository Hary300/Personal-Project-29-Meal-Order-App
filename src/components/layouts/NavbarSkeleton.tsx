import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

const NavbarSkeleton = () => {
  return (
    <header
      className={`sticky top-0 px-4 lg:px-30 h-[64px] lg:h-20 flex justify-between w-full z-20`}
    >
      <div
        className={cn(
          'flex items-center gap-[11.43px] lg:gap-3.75 lg:w-full lg:max-w-37.25'
        )}
      >
        <Skeleton className='w-10.5 h-10.5 aspect-square shrink-0 rounded-full bg-neutral-200' />

        <Skeleton className='hidden lg:block w-full max-w-20 h-10.5 rounded-md bg-neutral-200' />
      </div>

      <div className='flex gap-4 items-center md:w-full md:max-w-48.25'>
        <div className='relative'>
          <Skeleton className='w-8 h-8 shrink-0 rounded-md bg-neutral-200' />
        </div>
        <div className='flex items-center gap-4 w-full md:max-w-34.25'>
          <Skeleton className='w-10.5 h-10.5 aspect-square shrink-0 rounded-full bg-neutral-200' />

          <Skeleton className='hidden md:block w-full max-w-20 h-10.5 rounded-md bg-neutral-200' />
        </div>
      </div>
    </header>
  );
};

export default NavbarSkeleton;
