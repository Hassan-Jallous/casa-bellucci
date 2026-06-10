// Widens string literals to `string` (so EN/IT slices can hold different text)
// while PRESERVING tuple/array LENGTH and object shape. This means a missing or
// extra key, or a wrong array length, becomes a compile error on the `: Dict`
// annotated EN/IT objects. Relies on every German source slice being declared
// `as const` so nested arrays become fixed-length tuples.
export type Widen<T> =
  T extends string ? string :
  T extends number ? number :
  T extends boolean ? boolean :
  T extends readonly unknown[] ? { readonly [K in keyof T]: Widen<T[K]> } :
  T extends object ? { readonly [K in keyof T]: Widen<T[K]> } :
  T;
