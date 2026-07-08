import { footerNavigation } from '@/data/footerNavigation';
import Logo from '../shared/Logo';
import SocialMedia from '../shared/SocialMedia';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='grid grid-cols-2 lg:grid-cols-[auto_1fr] border-t w-full px-4 py-10 bg-neutral-950 lg:px-30 lg:py-20 text-neutral-25 gap-6 lg:gap-50'>
      <div className='flex flex-col gap-4 lg:gap-10 w-full lg:max-w-95 col-span-2 md:col-span-1'>
        <div className='flex flex-col gap-5.5'>
          <Logo logoColor='red' textColor='light' stayVisibleText />
          <p className='text-sm leading-sm lg:text-md lg:leading-md'>
            Enjoy homemade flavors & chef’s signature dishes, freshly prepared
            every day. Order online or visit our nearest branch.
          </p>
        </div>
        <div className='flex flex-col gap-5'>
          <p className='font-bold lg:font-extrabold text-sm lg:text-md'>
            Follow on Social Media
          </p>
          <SocialMedia />
        </div>
      </div>
      <div className='flex justify-between gap-4 col-span-2 md:col-span-1 w-full'>
        {footerNavigation.map((section) => (
          <div
            key={section.title}
            className='flex w-full flex-col gap-4 lg:gap-5 max-w-50'
          >
            <p className='font-extrabold text-sm lg:text-md'>{section.title}</p>
            <ul className='flex flex-col gap-4'>
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-sm lg:text-md hover:text-primary-100'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
