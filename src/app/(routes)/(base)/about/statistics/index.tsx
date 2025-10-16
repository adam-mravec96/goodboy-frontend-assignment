'use client';

import {
  type GetApiV1SheltersResults200Response,
  SheltersResultsApi,
} from '@app/client/generated';
import { useQuery } from '@tanstack/react-query';
import CountUp from 'react-countup';

const fetchStatistics =
  async (): Promise<GetApiV1SheltersResults200Response> => {
    const data = await new SheltersResultsApi().getApiV1SheltersResults({});

    return {
      contribution: Number(data.contribution) || 0,
      contributors: Number(data.contributors) || 0,
    };
  };

export const Statistics = () => {
  const { data, isLoading, isError } =
    useQuery<GetApiV1SheltersResults200Response>({
      queryKey: ['shelterStatistics'],
      queryFn: fetchStatistics,
    });

  if (isLoading) {
    return (
      <>
        <div>
          <h2 className='text-6xl font-bold text-indigo-600'>...</h2>
          <p className='mt-2 text-slate-500'>Celková vyzbieraná hodnota</p>
        </div>
        <div>
          <h2 className='text-6xl font-bold text-indigo-600'>...</h2>
          <p className='mt-2 text-slate-500'>Počet darcov</p>
        </div>
      </>
    );
  }

  if (isError) {
    return <p>Nepodarilo sa načítať štatistiky.</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <div>
        <h2 className='text-6xl font-bold text-indigo-600'>
          <CountUp
            end={data.contribution}
            duration={2.0}
            separator=' '
            suffix=' €'
            decimals={0}
            decimal=','
          />
        </h2>
        <p className='mt-2 text-slate-500'>Celková vyzbieraná hodnota</p>
      </div>
      <div>
        <h2 className='text-6xl font-bold text-indigo-600'>
          <CountUp end={data.contributors} duration={2.0} separator=' ' />
        </h2>
        <p className='mt-2 text-slate-500'>Počet darcov</p>
      </div>
    </>
  );
};
