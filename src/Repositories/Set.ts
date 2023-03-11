export type Set<TStore> = (
  partial:
    | TStore
    | Partial<TStore>
    | ((state: TStore) => TStore | Partial<TStore>),
  replace?: boolean | undefined
) => void;
