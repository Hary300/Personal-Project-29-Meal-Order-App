import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '@/components/ui/field';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { UseFormRegister } from 'react-hook-form';
import { ReviewFormBody } from '@/features/review/schema/reviewSchema';

type ReviewDialogBodyProps = {
  rating: number;
  register: UseFormRegister<ReviewFormBody>;
  onRatingChange: (rating: number) => void;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const ReviewDialogBody = ({
  rating,
  register,
  onRatingChange,
  onSubmit,
}: ReviewDialogBodyProps) => {
  return (
    <DialogContent className='sm:max-w-100'>
      <form onSubmit={onSubmit}>
        <DialogHeader>
          <DialogTitle>Give Review</DialogTitle>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <p className='font-extrabold text-md text-center'>Give Rating</p>
            <div className='flex gap-2 justify-center'>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`size-7.5 cursor-pointer ${
                    index < rating
                      ? 'fill-[#FFAB0D] text-[#FFAB0D]'
                      : 'fill-neutral-400 text-neutral-400'
                  }`}
                  onClick={() => onRatingChange(index)}
                />
              ))}
            </div>
          </Field>
          <Field>
            <Textarea
              id='textarea-message'
              placeholder='Please share your thoughts about our service!'
              {...register('comment')}
            />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <Button type='submit'>Send</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default ReviewDialogBody;
