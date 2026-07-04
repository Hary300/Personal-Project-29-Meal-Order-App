import Image from 'next/image';
import LogoIcon from '@/assets/icons/Logo.svg';

const Logo = () => {
  return (
    <div className='flex gap-[11.43px] lg:gap-3.75'>
      <Image src={LogoIcon} alt='Logo icon' className='size-4xl lg:size-10.5' />
      <span className='font-extrabold text-[24.38px] lg:text-display-md'>
        Food
      </span>
    </div>
  );
};

export default Logo;
