import { SheltersApi } from '@/app/client/generated';

import { WizardContainer } from './wizard';

const HomePage = async () => {
  const { shelters = [] } = await new SheltersApi().getApiV1Shelters({});

  return (
    <main className='flex h-full items-center justify-center'>
      {/* {shelters.map((shelter) => (
        <div key={shelter.id}>
          <h2>{shelter.name}</h2>
        </div>
      ))} */}
      <WizardContainer />
    </main>
  );
};

export default HomePage;
