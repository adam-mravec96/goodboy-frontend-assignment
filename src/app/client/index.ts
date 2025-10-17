import {
  isServer,
  MutationCache,
  QueryCache,
  QueryClient,
} from '@tanstack/react-query';

type QueryClientConfig = {
  onMutationSuccess?: MutationCache['config']['onSuccess'];
  onMutationError?: MutationCache['config']['onError'];
  onQuerySuccess?: QueryCache['config']['onSuccess'];
  onQueryError?: QueryCache['config']['onError'];
};

const createQueryClient = ({
  onMutationSuccess,
  onMutationError,
  onQuerySuccess,
  onQueryError,
}: QueryClientConfig): QueryClient =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3 * 60 * 1000, // 3 minutes
        gcTime: 5 * 60 * 1000, // 5 minutes
        retry: false,
      },
    },
    queryCache: new QueryCache({
      onSuccess: onQuerySuccess,
      onError: onQueryError,
    }),
    mutationCache: new MutationCache({
      onSuccess: onMutationSuccess,
      onError: onMutationError,
    }),
  });

let browserQueryClient: QueryClient | undefined = undefined;

export const getQueryClient = (props: QueryClientConfig): QueryClient => {
  if (isServer) return createQueryClient(props);

  browserQueryClient ??= createQueryClient(props);
  return browserQueryClient;
};
