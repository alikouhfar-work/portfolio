import type en from '@/dictionaries/en.json'

type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends Array<infer U>
        ? Array<Widen<U>>
        : T extends object
          ? { [K in keyof T]: Widen<T[K]> }
          : T

export type Dictionary = Widen<typeof en>
