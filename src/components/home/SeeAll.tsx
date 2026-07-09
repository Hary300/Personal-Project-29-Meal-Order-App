'use client';
import { useRouter } from 'next/navigation';

const SeeAll = () => {
  const router = useRouter();
  const handleSeeAllClick = () => {
    router.push('/category');
  };
  return (
    <p
      className='text-primary-100 font-extrabold text-md lg:text-lg cursor-pointer hover:underline'
      onClick={handleSeeAllClick}
    >
      See All
    </p>
  );
};

export default SeeAll;
