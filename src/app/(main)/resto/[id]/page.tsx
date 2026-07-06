'use client';
import DetailHeroCarousel from '@/components/detail/DetailHeroMobile';
import DetailHeroSection from '@/components/detail/DetailHeroSection';
import { useRestaurantDetail } from '@/features/restaurant/hook/useRestaurantDetail';
import { useParams } from 'next/navigation';

const RestaurantDetailPage = () => {
  const { id } = useParams();

  const {
    data: detailResponse,
    isLoading,
    error,
  } = useRestaurantDetail(Number(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!detailResponse) {
    console.log('No data');
    return null;
  }
  
  const restaurantDetail = detailResponse.data;

  return (
    <div className='px-4 lg:px-30'>
      <DetailHeroCarousel images={restaurantDetail.images} />
      <DetailHeroSection restaurantDetail={restaurantDetail} />
      <div className='h-0.5 w-full bg-neutral-300' />
      <div className='pt-4'>
        

      </div>
    </div>
  );
};

export default RestaurantDetailPage;
