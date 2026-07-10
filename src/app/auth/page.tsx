import { Suspense } from 'react';
import AuthPageClient from './authPageClient';
import Loading from '@/components/shared/Loading';

const AuthPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AuthPageClient />
    </Suspense>
  );
};

export default AuthPage;
