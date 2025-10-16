import { SheltersApi } from '@/app/client/generated';

const HomePage = async () => {
  const { shelters = [] } = await new SheltersApi().getApiV1Shelters({});

  return (
    <main className='flex items-center justify-center'>
      <h1>home page</h1>

      {shelters.map((shelter) => (
        <div key={shelter.id}>
          <h2>{shelter.name}</h2>
        </div>
      ))}
    </main>
  );
};

export default HomePage;
