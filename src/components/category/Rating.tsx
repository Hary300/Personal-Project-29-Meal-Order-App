'use client';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useRouter, useSearchParams } from 'next/navigation';
import { Label } from '../ui/label';
import { Star } from 'lucide-react';

type RatingProps = {
  onClick?: () => void;
};

const Rating = ({ onClick }: RatingProps) => {
  const searchParams = useSearchParams();
  const rating = searchParams.get('rating');
  const router = useRouter();
  return (
    <div className='flex flex-col gap-2.5 pb-3 lg:pb-6'>
      <h3 className='font-extrabold text-md lg:text-lg'>Rating</h3>
      <RadioGroup
        value={rating}
        onValueChange={(value) => {
          setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());

            params.set('rating', value);

            router.push(`/resto?${params.toString()}`, { scroll: false });
          }, 200);
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => {
          const value = 5 - index;
          return (
            <div
              key={index}
              className='flex items-center gap-3'
              onClick={onClick}
            >
              <RadioGroupItem
                value={String(value)}
                id={String(value)}
                variant='checkbox'
              />
              <Label
                htmlFor={String(value)}
                className=' w-full  cursor-pointer '
              >
                <Star className='text-[#FFAB0D] fill-[#FFAB0D] size-6' />
                <p>{value}</p>
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default Rating;
