'use client';

import { Button } from '@components/button';
import { Input } from '@components/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/select';
import { ToggleGroup, ToggleGroupItem } from '@components/toggleGroup';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useWizard } from 'react-use-wizard';

const donationCategory = [5, 10, 20, 30, 50, 100];

export const Step1 = () => {
  const { nextStep } = useWizard();
  const [amount, setAmount] = useState('50');

  return (
    <div className='flex h-full flex-col'>
      <div className='flex-grow space-y-8 overflow-y-auto px-2'>
        <h1 className='text-center text-4xl font-bold'>
          Vyberte si možnosť, ako chcete pomôcť
        </h1>

        <ToggleGroup
          type='single'
          defaultValue='nadacii'
          className='grid w-full grid-cols-2'
        >
          <ToggleGroupItem value='utulku' className='cursor-pointer py-6'>
            Prispieť konkrétnemu útulku
          </ToggleGroupItem>
          <ToggleGroupItem value='nadacii' className='cursor-pointer py-6'>
            Prispieť celej nadácii
          </ToggleGroupItem>
        </ToggleGroup>

        <div>
          <h2 className='text-lg font-semibold'>O projekte</h2>
          <p className='mb-2 text-sm text-slate-500'>Útulok (Nepovinné)</p>
          <Select>
            <SelectTrigger className='cursor-pointer'>
              <SelectValue placeholder='Vyberte útulok zo zoznamu' />
            </SelectTrigger>
            <SelectContent>
              {/* TODO: Načítať reálne dáta z API */}
              <SelectItem className='cursor-pointer' value='utulok1'>
                Mestský útulok, Žilina
              </SelectItem>
              <SelectItem className='cursor-pointer' value='utulok2'>
                Útulok pre psov - TEZAS
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <h2 className='text-lg font-semibold'>Suma, ktorou chcem prispieť</h2>

          <div className='flex flex-col items-center'>
            <div className='my-4 flex items-baseline border-b-2 border-indigo-600 pb-2'>
              <Input
                type='number'
                placeholder='0'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className='h-auto w-46 border-none bg-transparent p-0 text-center text-4xl font-medium text-slate-400 shadow-none [-moz-appearance:textfield] focus-visible:ring-0 focus-visible:ring-offset-0 md:text-6xl [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
              />
              <span className='text-4xl font-light text-slate-400'>€</span>
            </div>
          </div>

          <ToggleGroup
            type='single'
            value={amount}
            onValueChange={(value) => {
              if (value) {
                setAmount(value);
              }
            }}
            className='grid grid-cols-6 gap-2'
          >
            {donationCategory.map((catAmount) => (
              <ToggleGroupItem
                key={catAmount}
                value={String(catAmount)}
                className='cursor-pointer'
              >
                {catAmount} €
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>

      <div className='flex justify-between py-8'>
        <Button variant='outline' disabled>
          <ArrowLeft className='mr-2 h-4 w-4' /> Späť
        </Button>
        <Button type='button' className='cursor-pointer' onClick={nextStep}>
          Pokračovať <ArrowRight className='ml-2 h-4 w-4' />
        </Button>
      </div>
    </div>
  );
};
