'use client';
import CartList from '@/components/cart/CartList';
import { useGetItemsCart } from '@/features/cart/hook/useCart';

const CartPage = () => {
  const { data: cartResponse, isLoading, error } = useGetItemsCart();

  const cartRestaurants = cartResponse?.data.cart;

  return (
    <div className='px-4 lg:px-30 pt-4 lg:pt-12 pb-10 lg:pb-25 bg-neutral-50 flex flex-col gap-4 lg:gap-8'>
      <div className='max-w-200 mx-auto w-full'>
        <h1 className='font-extrabold text-display-xs lg:text-display-md'>
          My Cart
        </h1>
        {!cartRestaurants ? (
          <p>Loading...</p>
        ) : cartRestaurants.length !== 0 ? (
          <CartList cartRestaurants={cartRestaurants} />
        ) : (
          <p>Cart is Empty</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
