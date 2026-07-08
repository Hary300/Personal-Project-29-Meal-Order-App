import { Cart } from '@/features/cart/types';

export const mapCartToCheckoutRestaurants = (cart: Cart[]) => {
  return cart.map((restaurant) => ({
    restaurantId: restaurant.restaurant.id,
    items: restaurant.items.map((item) => ({
      menuId: item.menu.id,
      quantity: item.quantity,
    })),
  }));
};
