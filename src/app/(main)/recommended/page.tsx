import RecommendedRestaurantsGrid from '@/components/recommended/RecommendedRestaurantsGrid';

const RecommendedRestaurants = () => {
  return (
    <div className='px-4 lg:px-30 pt-4 lg:pt-12 pb-26 lg:pb-45 bg-neutral-50 flex flex-col gap-4 lg:gap-8'>
      <div className='max-w-360 mx-auto w-full'>
        <h1 className='font-extrabold text-display-xs lg:text-display-md'>
          Recommended Restaurants
        </h1>
      </div>

      <RecommendedRestaurantsGrid />
    </div>
  );
};

export default RecommendedRestaurants;
