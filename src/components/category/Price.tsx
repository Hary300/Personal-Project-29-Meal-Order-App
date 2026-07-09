'use client';
import {
  priceSchema,
  PriceSchema,
} from '@/features/category/schema/priceSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';

type DataInputs = {
  id: number;
  name: 'minPrice' | 'maxPrice';
  placeholder: string;
};

const Price = () => {
  const { register, handleSubmit } = useForm<PriceSchema>({
    resolver: zodResolver(priceSchema),
  });
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSubmit = (data: PriceSchema) => {
    console.log('submit');
    console.log(data);
    const params = new URLSearchParams(searchParams.toString());

    if (data.minPrice !== undefined) {
      params.set('minPrice', String(data.minPrice));
    } else {
      params.delete('minPrice');
    }

    if (data.maxPrice !== undefined) {
      params.set('maxPrice', String(data.maxPrice));
    } else {
      params.delete('maxPrice');
    }

    router.push(`/category?${params.toString()}`);
  };

  const dataInputs: DataInputs[] = [
    { id: 1, name: 'minPrice', placeholder: 'Minimum Price' },
    { id: 2, name: 'maxPrice', placeholder: 'Maximum Price' },
  ];
  return (
    <div className='flex flex-col gap-2.5 pb-3 lg:pb-6'>
      <h3 className='font-extrabold text-md lg:text-lg'>Price</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2.5'>
        {dataInputs.map((input) => (
          <div key={input.id} className='flex gap-2 rounded-md border p-2'>
            <div className='flex justify-center items-center bg-neutral-100 rounded-xs size-9.5'>
              <span className='font-bold text-sm lg:text-md '>Rp</span>
            </div>

            <input
              type='number'
              {...register(input.name, {
                valueAsNumber: true,
              })}
              placeholder={input.placeholder}
              className='outline-0 focus:placeholder:text-transparent w-full'
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default Price;
