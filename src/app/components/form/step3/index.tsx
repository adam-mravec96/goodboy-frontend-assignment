'use client';

import { Button } from '@components/button';
import { Checkbox } from '@components/checkbox';
import { ArrowLeft } from 'lucide-react';
import { useWizard } from 'react-use-wizard';

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <div className='flex justify-between py-3'>
    <p className='text-slate-500'>{label}</p>
    <p className='font-semibold'>{value}</p>
  </div>
);

export const Step3 = () => {
  const { previousStep } = useWizard();

  return (
    <div className='flex h-full flex-col'>
      <div className='flex-grow space-y-8 overflow-y-auto px-2'>
        <h1 className='text-center text-4xl font-bold'>
          Skontrolujte si zadané údaje
        </h1>

        <div className='space-y-4'>
          <div>
            <h2 className='mb-2 text-lg font-bold'>Zhrnutie</h2>
            {/* TODO: Zobraziť reálne dáta zo Zustandu */}
            <SummaryRow
              label='Forma pomoci'
              value='Finančný príspevok celej nadácii'
            />
            <SummaryRow label='Útulok' value='Mestský útulok, Žilina' />
            <SummaryRow label='Suma príspevku' value='50 €' />
          </div>
          <hr />
          <div>
            <SummaryRow label='Meno a priezvisko' value='Peter Reguli' />
            <SummaryRow label='E-mail' value='peter.reguli@goodrequest.com' />
            <SummaryRow label='Telefónne číslo' value='+421 902 237 207' />
          </div>
        </div>

        <div className='flex items-center space-x-2'>
          <Checkbox className='cursor-pointer' id='terms' />
          <label htmlFor='terms' className='text-sm'>
            Súhlasím so spracovaním mojich osobných údajov
          </label>
        </div>
      </div>

      <div className='flex justify-between py-8'>
        <Button
          variant='outline'
          type='button'
          className='cursor-pointer'
          onClick={previousStep}
        >
          <ArrowLeft className='mr-2 h-4 w-4' /> Späť
        </Button>
        {/* TODO: Pridať onClick logiku pre odoslanie formulára */}
        <Button type='button' className='cursor-pointer'>
          Odoslať formulár
        </Button>
      </div>
    </div>
  );
};
