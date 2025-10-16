import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

import { Statistics } from './statistics';

const AboutPage = () => (
  <main className='max-w-8xl mx-auto px-4 pt-4 pb-12'>
    <Link
      href='/'
      className='mb-12 flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900'
    >
      <MoveLeft size={20} />
      <span>Späť</span>
    </Link>

    <div className='space-y-8'>
      <h1 className='text-5xl font-bold text-slate-900'>O projekte</h1>

      <p className='text-lg leading-relaxed text-slate-700'>
        Nadácia Good Boy sa venuje zlepšovaniu života psov v Žiline na
        Slovensku. Zachraňujeme opustené, týrané a bezdomovské psy, poskytujeme
        im lekársku starostlivosť, útočisko a lásku, ktorú si zaslúžia. Naším
        poslaním je dať týmto verným spoločníkom druhú šancu na život tým, že im
        nájdeme milujúci domov. Okrem záchrany a rehabilitácie sa zameriavame aj
        na podporu zodpovedného vlastníctva zvierat a ochrany zvierat
        prostredníctvom vzdelávacích a komunitných programov.
      </p>

      <hr className='my-12' />

      <section className='flex justify-around py-8 text-center'>
        <Statistics />
      </section>

      <hr className='my-12' />

      <p className='text-lg leading-relaxed text-slate-700'>
        Naša práca je možná vďaka podpore vášnivých dobrovoľníkov, štedrých
        darcov a komunity, ktorá sa hlboko stará o dobro zvierat. Organizujeme
        aj kastračné a sterilizačné iniciatívy, aby sme riešili problém túlavých
        psov a zabezpečili dlhodobý vplyv. V nadácii Good Boy veríme, že každý
        pes si zaslúži bezpečný, milujúci domov a šťastný život. Pridajte sa k
        nám a pomôžte nám robiť zmeny – či už dobrovoľníctvom, darovaním alebo
        adopciou chlpatého priateľa. Spoločne môžeme vytvoriť lepšiu budúcnosť
        pre psy v Žiline.
      </p>
    </div>
  </main>
);

export default AboutPage;
