'use client';

import 'flag-icons/css/flag-icons.min.css';

import { Button } from '@components/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@components/field';
import { Input } from '@components/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/select';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useWizard } from 'react-use-wizard';

// 1. DÁTA PRE KRAJINY: Vytvoríme si malý objekt pre čistotu kódu
const countryData = {
  SK: { prefix: '+421', placeholder: '123 321 132' },
  CZ: { prefix: '+420', placeholder: '123 321 132' },
};

export const Step2 = () => {
  const { nextStep, previousStep } = useWizard();
  const [selectedCountry, setSelectedCountry] = useState<'SK' | 'CZ'>('SK');

  return (
    <div className='flex h-full flex-col'>
      <form>
        <div className='lex-grow space-y-8 overflow-y-auto px-2'>
          <h1 className='text-center text-4xl font-bold'>
            Potrebujeme od Vás zopár informácií
          </h1>

          <FieldSet>
            <FieldLegend>O vás</FieldLegend>
            <FieldGroup>
              <div className='grid grid-cols-2 gap-4'>
                <Field>
                  <FieldLabel>Meno</FieldLabel>
                  <Input placeholder='Zadajte Vaše meno' />
                  <FieldError />
                </Field>
                <Field>
                  <FieldLabel>Priezvisko</FieldLabel>
                  <Input placeholder='Zadajte Vaše priezvisko' />
                  <FieldError />
                </Field>
              </div>

              <Field>
                <FieldLabel>E-mailová adresa</FieldLabel>
                <Input placeholder='Zadajte Vás e-mail' />
                <FieldError />
              </Field>

              <Field>
                <FieldLabel>Telefónne číslo</FieldLabel>
                <div className='flex items-center gap-2'>
                  <Select
                    value={selectedCountry}
                    onValueChange={(value: 'SK' | 'CZ') =>
                      setSelectedCountry(value)
                    }
                  >
                    <SelectTrigger className='w-[65px] cursor-pointer'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className='w-[65px] min-w-0'>
                      <SelectItem className='cursor-pointer' value='SK'>
                        <span className='fi fi-sk rounded-full' />
                      </SelectItem>
                      <SelectItem className='cursor-pointer' value='CZ'>
                        <span className='fi fi-cz rounded-full' />
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <div className='flex h-10 w-full items-center rounded-md border border-input bg-white text-sm ring-offset-background'>
                    <span className='pl-3 font-semibold text-foreground'>
                      {countryData[selectedCountry].prefix}
                    </span>
                    <Input
                      type='tel'
                      placeholder={countryData[selectedCountry].placeholder}
                      className='flex-1 border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0'
                    />
                  </div>
                </div>
                <FieldError />
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
      </form>

      <div className='mt-auto flex justify-between py-8'>
        <Button
          variant='outline'
          type='button'
          className='cursor-pointer'
          onClick={previousStep}
        >
          <ArrowLeft className='mr-2 h-4 w-4' /> Späť
        </Button>
        <Button type='button' className='cursor-pointer' onClick={nextStep}>
          Pokračovať <ArrowRight className='ml-2 h-4 w-4' />
        </Button>
      </div>
    </div>
  );
};
