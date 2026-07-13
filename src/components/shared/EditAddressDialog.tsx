'use client';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '../ui/field';
import { Label } from '../ui/label';
import { useForm } from 'react-hook-form';
import { AddressDataType } from '../profile/address/Address';
import { Input } from '../ui/input';
import { Dispatch, SetStateAction } from 'react';

type EditAddressDialogProps = {
  deliveryAddress: string;
  phone: string;
  onSave: Dispatch<SetStateAction<AddressDataType | null>>;
};

const EditAddressDialog = ({
  deliveryAddress,
  phone,
  onSave,
}: EditAddressDialogProps) => {
  const { register, handleSubmit } = useForm<AddressDataType>({
    defaultValues: { deliveryAddress, phone },
  });

  const onSubmit = (data: AddressDataType) => {
    onSave(data);
    localStorage.setItem('address', JSON.stringify(data));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='max-w-30'>
          <Button
            type='button'
            variant='outline'
            className='text-neutral-950 h-9 lg:h-10'
          >
            Change
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit Address</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor='deliveryAddress'>Address</Label>
              <Input id='deliveryAddress' {...register('deliveryAddress')} />
            </Field>
            <Field>
              <Label htmlFor='phone'>Phone Number</Label>
              <Input id='phone' {...register('phone')} />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='outline' className='text-neutral-950'>
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type='submit'>Save</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditAddressDialog;
