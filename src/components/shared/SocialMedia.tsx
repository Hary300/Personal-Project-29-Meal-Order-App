import { socialMedias } from '@/data/socialMedia';
import Image from 'next/image';

const SocialMedia = () => {
  return (
    <div className='flex gap-3'>
      {socialMedias.map((socialMedia) => (
        <a
          href={socialMedia.link}
          target='_blank'
          key={socialMedia.id}
          className='size-10 aspect-square flex justify-center items-center rounded-full border'
        >
          <Image src={socialMedia.icon} alt={`${socialMedia.name} icon`} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
