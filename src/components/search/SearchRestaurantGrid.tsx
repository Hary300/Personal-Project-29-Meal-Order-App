'use client';
import RestaurantCard from '../shared/RestaurantCard';
import { EmptyData } from '../shared/EmptyData';
import { useSearchParams } from 'next/navigation';
import { useSearchRestaurant } from '@/features/restaurant/hook/useSearchRestaurant';
import Loading from '../shared/Loading';

const SearchRestaurantGrid = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') ?? '';
  const {
    data: restaurantsResponse,
    isLoading,
    error,
  } = useSearchRestaurant({ q });
  if (isLoading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  const restaurants = restaurantsResponse?.data.restaurants ?? [];
  return restaurants.length === 0 ? (
    <EmptyData>No Result</EmptyData>
  ) : (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 w-full'>
      {restaurants.map((restaurant) => (
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

export default SearchRestaurantGrid;
