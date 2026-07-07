import { Cart } from '@/features/cart/types';
import CartCard from './CartCard';

const CartList = ({ cartRestaurants }: { cartRestaurants: Cart[] }) => {
  return (
    <div className='flex flex-col gap-5'>
      {cartRestaurants.map((cartRestaurant) => (
        <CartCard
          key={cartRestaurant.restaurant.id}
          cartRestaurant={cartRestaurant}
        />
      ))}
    </div>
  );
};

export default CartList;
