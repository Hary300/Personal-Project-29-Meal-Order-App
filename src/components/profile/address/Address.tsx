'use client';
import EditAddressDialog from '@/components/shared/EditAddressDialog';
import { EmptyData } from '@/components/shared/EmptyData';
import { useState } from 'react';

export type AddressDataType = {
  deliveryAddress: string;
  phone: string;
};

const Address = () => {
  const [address, setAddress] = useState<AddressDataType | null>(() => {
    const savedAddressData = localStorage.getItem('address');
    return savedAddressData ? JSON.parse(savedAddressData) : null;
  });

  return (
    <section
      id='profile-address'
      className='flex flex-col gap-4 lg:gap-6 w-full'
    >
      <h1 className='font-extrabold text-display-xs lg:text-display-md'>
        Address
      </h1>
      <div className='rounded-2xl h-50 p-4 shadow-[0_0_20px_0_#CBCACA40] bg-white'>
        {!address ? (
          <EmptyData />
        ) : (
          <div className='flex flex-col gap-4'>
            <p>{address?.deliveryAddress}</p>
            <p>{address.phone}</p>

            <EditAddressDialog
              deliveryAddress={address?.deliveryAddress}
              phone={address?.phone}
              onSave={setAddress}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Address;
