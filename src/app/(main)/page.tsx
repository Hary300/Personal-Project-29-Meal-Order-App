import CategorySection from '@/components/home/CategorySection';
import HomeHeroSection from '@/components/home/HomeHeroSection';
import RecommendedSection from '@/components/home/RecommendedSection';
import Loading from '@/components/shared/Loading';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-6 lg:gap-12'>
      <HomeHeroSection />
      <Suspense fallback={<Loading />}>
        <CategorySection />
      </Suspense>
      <RecommendedSection />
    </div>
  );
};

export default HomePage;
