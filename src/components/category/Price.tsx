'use client';
import { KeyboardEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type DataInputs = {
  id: number;
  name: 'priceMin' | 'priceMax';
  placeholder: string;
};

type PriceProps = {
  onEnter?: () => void;
};

const Price = ({ onEnter }: PriceProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [minPrice, setMinPrice] = useState(searchParams.get('priceMin') ?? '');

  const [maxPrice, setMaxPrice] = useState(searchParams.get('priceMax') ?? '');

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    onEnter?.();

    const params = new URLSearchParams(searchParams.toString());

    if (minPrice) {
      params.set('priceMin', minPrice);
    } else {
      params.delete('priceMin');
    }

    if (maxPrice) {
      params.set('priceMax', maxPrice);
    } else {
      params.delete('priceMax');
    }

    router.push(`/resto?${params.toString()}`, { scroll: false });
  };

  const dataInputs: DataInputs[] = [
    { id: 1, name: 'priceMin', placeholder: 'Minimum Price' },
    { id: 2, name: 'priceMax', placeholder: 'Maximum Price' },
  ];
  return (
    <div className='flex flex-col gap-2.5 pb-3 lg:pb-6'>
      <h3 className='font-extrabold text-md lg:text-lg'>Price</h3>
      <div className='flex flex-col gap-2.5'>
        {dataInputs.map((input) => (
          <div key={input.id} className='flex gap-2 rounded-md border p-2'>
            <div className='flex justify-center items-center bg-neutral-100 rounded-xs w-9.5 h-9.5 shrink-0'>
              <span className='font-bold text-sm lg:text-md '>Rp</span>
            </div>

            <input
              type='number'
              value={input.name === 'priceMin' ? minPrice : maxPrice}
              placeholder={input.placeholder}
              onChange={(e) => {
                if (input.name === 'priceMin') {
                  setMinPrice(e.target.value);
                } else {
                  setMaxPrice(e.target.value);
                }
              }}
              onKeyDown={handleEnter}
              className='w-full outline-0 focus:placeholder:text-transparent'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
