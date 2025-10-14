/**
 * @description Merge types
 * @example MergeTypes<[type A, type B, type C]> // A & B & C
 */
type MergeTypes<T extends unknown[], K = NonNullable<unknown>> = T extends [
  infer Head,
  ...infer Rest,
]
  ? MergeTypes<Rest, K & Head>
  : K;

/**
 * @description Union of types
 * @example OneOf<[type A, type B, type C]> // A | B | C
 */
type OneOf<T extends unknown[], K = never, N = MergeTypes<T>> = T extends [
  infer Head,
  ...infer Rest,
]
  ? OneOf<Rest, K | (Head & { [Key in keyof Omit<N, keyof Head>]?: never }), N>
  : K;
