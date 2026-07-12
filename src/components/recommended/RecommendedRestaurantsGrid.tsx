'use client';
import { useRecommendedRestaurants } from '@/features/restaurant/hook/useRecommendedRestaurant';
import Loading from '../shared/Loading';
import { EmptyData } from '../shared/EmptyData';
import RestaurantCard from '../shared/RestaurantCard';

const RecommendedRestaurantsGrid = () => {
  const {
    data: recommendedResponse,
    isLoading,
    error,
  } = useRecommendedRestaurants();
  if (isLoading) return <Loading />;
  if (error) return <p>{error.message}</p>;

  const recommendedRestaurants =
    recommendedResponse?.data.recommendations ?? [];
  if (recommendedRestaurants.length === 0)
    return <EmptyData>No Recommended Restaurants</EmptyData>;
  return (
    <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5 w-full'>
      {recommendedRestaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          logo={restaurant.logo}
          name={restaurant.name}
          place={restaurant.place}
          restaurantId={restaurant.id}
          star={restaurant.star}
        />
      ))}
    </div>
  );
};

export default RecommendedRestaurantsGrid;
