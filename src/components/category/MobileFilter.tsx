'use client';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import filterIcon from '@/assets/icons/filter-lines.svg';
import Distance from './Distance';
import Price from './Price';
import Rating from './Rating';
import { useState } from 'react';

const MobileFilter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div className='rounded-xl flex justify-between items-center p-3 shadow-[0_0_20px_0_#CBCACA40] lg:hidden'>
            <p className='font-extrabold text-sm'>Filter</p>

            <Image
              src={filterIcon}
              alt='filter icon'
              width={20}
              height={20}
              className='cursor-pointer'
            />
          </div>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle className='font-bold lg:font-extrabold text-md'>
              Filter
            </SheetTitle>
            <div className='flex flex-col gap-3 lg:gap-6 divide-y'>
              <Distance onSelect={() => setOpen(false)} />
              <Price />
              <Rating onSelect={() => setOpen(false)} />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileFilter;
