'use client';
import { Cart } from '@/features/cart/types';
import restaurantIcon from '@/assets/icons/restaurant-icon.png';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import DecIncButton from './DecIncButton';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const CartCard = ({ cartRestaurant }: { cartRestaurant: Cart }) => {
  const cartItems = cartRestaurant.items;

  const router = useRouter();

  const handleRestaurantClick = (restaurantId: number) => {
    router.push(`/resto/${restaurantId}`);
  };
  return (
    <div className='flex flex-col gap-3 lg:gap-5 rounded-2xl p-4 lg:p-5 shadow-[0_0_20px_0_#CBCACA40]'>
      <div className='flex justify-between w-fit items-center'>
        <Image
          src={restaurantIcon}
          alt='restaurant icon'
          width={32}
          height={32}
        />
        <h2
          className='font-bold text-md leading-md lg:text-lg lg:leading-lg hover:underline cursor-pointer'
          onClick={() => handleRestaurantClick(cartRestaurant.restaurant.id)}
        >
          {cartRestaurant.restaurant.name}
        </h2>
        <ChevronRight />
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className='flex justify-between'>
          <div className='flex items-center gap-4.25'>
            <div className='relative w-16 h-16 rounded-xl overflow-hidden'>
              <Image
                src={item.menu.image}
                alt={item.menu.foodName}
                fill
                sizes='64'
                className='object-cover object-center'
              />
            </div>
            <div>
              <p className='font-medium text-sm lg:text-md'>
                {item.menu.foodName}
              </p>
              <p className='font-extrabold text-md lg:text-lg'>
                Rp{item.menu.price.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
          <DecIncButton cartItemId={item.id} quantity={item.quantity} />
        </div>
      ))}

      <div className='w-full border-t-2 border-dashed border-gray-400' />
      <div className='flex flex-col lg:flex-row lg:justify-between gap-4'>
        <div className='flex flex-col'>
          <p className='font-medium text-sm lg:text-md'>Total</p>
          <p className='font-extrabold text-lg lg:text-xl'>
            Rp{cartRestaurant.subtotal.toLocaleString('id-ID')}
          </p>
        </div>
        <div className='w-full lg:max-w-60'>
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
