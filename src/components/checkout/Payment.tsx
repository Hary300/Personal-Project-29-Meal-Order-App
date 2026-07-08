import { CartSummary } from '@/features/cart/types';
import PaymentMethod from './PaymentMethod';
import PaymentSummary from './PaymentSummary';
import DashedLine from '../shared/DashedLine';

const Payment = ({ summary }: { summary?: CartSummary }) => {
  return (
    <div className='w-full lg:max-w-97.5'>
      <PaymentMethod />
      <DashedLine />
      {summary && (
        <PaymentSummary
          totalPriceBeforeFee={summary.totalPrice}
          totalItems={summary.totalItems}
        />
      )}
    </div>
  );
};

export default Payment;
