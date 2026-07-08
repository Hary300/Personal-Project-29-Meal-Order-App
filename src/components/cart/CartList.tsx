import { Cart } from '@/features/cart/types';
import CartCard from './CartCard';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

type CartListProps = {
  cartRestaurants?: Cart[];
  isCart?: boolean;
  className?: string;
};

const CartList = ({ cartRestaurants, isCart, className }: CartListProps) => {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      {cartRestaurants && cartRestaurants.length > 0 ? (
        cartRestaurants.map((cartRestaurant) => (
          <CartCard
            key={cartRestaurant.restaurant.id}
            cartRestaurant={cartRestaurant}
            isCart={isCart}
          />
        ))
      ) : (
        <div className='h-50 flex flex-col justify-center items-center gap-4'>
          <ShoppingCart />
          <p className='text-xl font-bold '>Cart is Empty</p>
        </div>
      )}
    </div>
  );
};

export default CartList;
