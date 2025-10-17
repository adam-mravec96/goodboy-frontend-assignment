export const extractResponseFromError = (
  error: unknown,
): Response<Error> | undefined => {
  if (
    error &&
    typeof error === 'object' &&
    'response' in error &&
    error.response instanceof Response
  )
    return error.response as Response<Error>;
};
