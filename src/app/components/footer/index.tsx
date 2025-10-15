import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => (
  <footer className='flex items-center justify-between pt-6 pb-16'>
    <Link href='/'>
      <Image src='/Logo.svg' alt='Logo-icon' width={124} height={32} />
    </Link>

    <div className='flex items-center gap-10'>
      <div className='flex items-center gap-4'>
        <Link
          href='https://www.facebook.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/Facebook.svg'
            alt='Facebook-icon'
            width={20}
            height={20}
          />
        </Link>
        <Link
          href='https://www.instagram.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/Instagram.svg'
            alt='Instagram-icon'
            width={20}
            height={20}
          />
        </Link>
      </div>

      <nav className='flex items-center gap-6'>
        <Link href='/contact'>Kontakt</Link>
        <Link href='/about'>O projekte</Link>
      </nav>
    </div>
  </footer>
);
