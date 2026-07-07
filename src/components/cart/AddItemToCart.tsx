import { useAddItemCart } from '@/features/cart/hook/useCart';
import { CartItem } from '@/features/cart/types';
import { Button } from '../ui/button';
import DecInc from './DecIncButton';

type AddItemToCartProps = {
  menuId: number;
  restaurantId: number;
  cartItem?: CartItem;
};

const AddItemToCart = ({
  menuId,
  restaurantId,
  cartItem,
}: AddItemToCartProps) => {
  const { mutate, isPending } = useAddItemCart();
  const quantity = cartItem?.quantity ?? 0;

  const handleAddClick = () => {
    mutate({ menuId, restaurantId, quantity: quantity + 1 });
  };

  return cartItem && quantity ? (
    <DecInc quantity={quantity} cartItemId={cartItem?.id} />
  ) : (
    <div className='w-full lg:max-w-19.75'>
      <Button onClick={handleAddClick} disabled={isPending}>
        Add
      </Button>
    </div>
  );
};

export default AddItemToCart;
