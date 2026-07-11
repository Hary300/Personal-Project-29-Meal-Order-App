import { RestaurantReview } from '@/features/restaurant/types';
import ReviewCard from './ReviewCard';

type ReviewGridProps = {
  reviewContext: {
    reviews: RestaurantReview[];
    restaurantId: number;
  };
};

const ReviewGrid = ({ reviewContext }: ReviewGridProps) => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:gap-5 lg:grid-cols-2'>
      {reviewContext.reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          restaurantId={reviewContext.restaurantId}
        />
      ))}
    </div>
  );
};

export default ReviewGrid;
