import { Mail, MapPin, MoveLeft, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CONTACT_INFO = [
  {
    type: 'Email',
    text: 'Our friendly team is here to help.',
    value: (
      <Link
        href='mailto:hello@goodrequest.com'
        className='text-indigo-600 hover:underline'
      >
        hello@goodrequest.com
      </Link>
    ),
    icon: <Mail className='text-indigo-600' size={24} />,
  },
  {
    type: 'Office',
    text: 'Come say hello at our office HQ.',
    value: (
      <Link
        href='https://maps.app.goo.gl/sfjXUDVBWqWLRnZp7'
        className='text-indigo-600 hover:underline'
        rel='noopener noreferrer'
        target='_blank'
      >
        Obchodná 3D, 010 08 Žilina, Slovakia
      </Link>
    ),
    icon: <MapPin className='text-indigo-600' size={24} />,
  },
  {
    type: 'Phone',
    text: 'Mon-Fri from 8am to 5pm.',
    value: (
      <Link
        href='tel:+421 911 750 750'
        className='text-indigo-600 hover:underline'
      >
        +421 911 750 750
      </Link>
    ),
    icon: <Phone className='text-indigo-600' size={24} />,
  },
] as const;

const ContactPage = () => (
  <main className='max-w-8xl mx-auto px-4 pt-4 pb-4'>
    <Link
      href='/'
      className='mb-12 flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900'
    >
      <MoveLeft size={20} />
      <span>Späť</span>
    </Link>

    <div className='space-y-12'>
      <h1 className='text-5xl font-bold text-slate-900'>Kontakt</h1>

      <section className='grid grid-cols-1 gap-8 text-center md:grid-cols-3'>
        {CONTACT_INFO.map(({ type, text, value, icon }) => (
          <div key={type} className='flex flex-col items-center space-y-3'>
            <div className='rounded-lg bg-indigo-100 p-3'>{icon}</div>
            <h2 className='font-semibold text-slate-800'>{type}</h2>
            <p className='text-sm text-slate-500'>{text}</p>
            {value}
          </div>
        ))}
      </section>

      {/* Image Section */}
      <div className='relative h-[50vh] w-full overflow-hidden rounded-3xl'>
        <Image
          src='/imgDog2.svg'
          alt='Pes2-img'
          fill
          className='object-cover'
        />
      </div>
    </div>
  </main>
);

export default ContactPage;
