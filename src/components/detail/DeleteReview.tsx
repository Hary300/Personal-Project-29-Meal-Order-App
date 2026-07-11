'use client';
import { Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useDeleteReview } from '@/features/review/hook/useReview';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const DeleteReview = ({
  reviewId,
  restaurantId,
}: {
  reviewId: number;
  restaurantId: number;
}) => {
  const { mutate: deleteReview } = useDeleteReview();

  const handleDeleteClick = (reviewId: number, restaurantId: number) => {
    const payload = {
      reviewId,
      restaurantId,
    };
    deleteReview(payload);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant='outline'
          className='text-neutral-950 w-10 h-10 aspect-square shrink-0'
        >
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure to delete this review?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='text-neutral-950'>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDeleteClick(reviewId, restaurantId)}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteReview;
