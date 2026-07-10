import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export const EmptyData = ({
  children,
  bg = true,
}: {
  children?: ReactNode;
  bg?: boolean;
}) => {
  return (
    <div
      className={cn(
        'min-h-50 w-full h-full rounded-2xl flex items-center justify-center text-md font-bold',
        bg ? 'bg-white shadow-[0_0_20px_0_#CBCACA40]' : ''
      )}
    >
      {children ? children : 'No Data'}
    </div>
  );
};
