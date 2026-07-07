import { Menu } from '@/features/restaurant/types';
import MenuCard from './MenuCard';
import { useGetItemsCart } from '@/features/cart/hook/useCart';

type MenuGridProps = {
  restaurantId: number;
  menus: Menu[];
};

const MenuGrid = ({ restaurantId, menus }: MenuGridProps) => {
  const { data: cart } = useGetItemsCart();
  const cartItems =
    cart?.data.cart.flatMap((restaurant) => restaurant.items) ?? [];

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 w-full'>
      {menus.map((menu) => {
        const cartItem = cartItems.find((item) => item.menu.id === menu.id);
        return (
          <MenuCard
            key={menu.id}
            restaurantId={restaurantId}
            menu={menu}
            cartItem={cartItem}
          />
        );
      })}
    </div>
  );
};

export default MenuGrid;
