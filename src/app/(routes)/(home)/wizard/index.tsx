'use client';

import { Step1 } from '@components/form/step1';
import { Step2 } from '@components/form/step2';
import { Step3 } from '@components/form/step3';
import { Stepper } from '@components/form/stepper';
import { Wizard } from 'react-use-wizard';

export const WizardContainer = () => (
  <div className='flex h-full w-full max-w-[44rem] flex-col pt-5'>
    <Wizard header={<Stepper />}>
      <Step1 />
      <Step2 />
      <Step3 />
    </Wizard>
  </div>
);
