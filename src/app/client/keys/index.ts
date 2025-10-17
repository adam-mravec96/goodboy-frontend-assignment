export const QUERY_KEYS = {
  SHELTERS: (search?: string) => [`shelters${search ? `-${search}` : ''}`],
} as const;

export const MUTATION_KEYS = {
  CONTRIBUTE_TO_SHELTER: (shelterId: string) => [
    `contribute-to-shelter-${shelterId}`,
  ],
} as const;
