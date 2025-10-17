'use client';

import { Check } from 'lucide-react';
import React from 'react';
import { useWizard } from 'react-use-wizard';

import { cn } from '@/app/helpers/cn';

export const Stepper = () => {
  const { activeStep, stepCount } = useWizard();
  const steps = ['Výber útulku', 'Osobné údaje', 'Potvrdenie'];

  return (
    <div className='mb-12 flex w-full items-center'>
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = activeStep > index;
        const isActive = activeStep === index;

        return (
          <React.Fragment key={label}>
            {/* kruh a text */}
            <div className='flex items-center gap-3'>
              <div
                className={cn(
                  'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors',
                  {
                    'border-2 border-indigo-600 bg-transparent text-indigo-600':
                      isCompleted,
                    'bg-indigo-600 text-white': isActive,
                    'bg-slate-200 text-slate-600': !isCompleted && !isActive,
                  },
                )}
              >
                {isCompleted ? <Check size={16} /> : stepNumber}
              </div>
              <p
                className={cn('text-sm font-medium', {
                  'text-indigo-600': isActive || isCompleted,
                  'text-slate-500': !isActive && !isCompleted,
                })}
              >
                {label}
              </p>
            </div>

            {/* deliaca čiara*/}
            {stepNumber < stepCount && (
              <div className='mx-4 h-0.5 flex-1 bg-slate-200' />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
