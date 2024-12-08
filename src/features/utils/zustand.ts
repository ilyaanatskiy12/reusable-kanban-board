export type InferZustandParams<T extends { setState: any; getState: any }> = [
  T["setState"],
  T["getState"],
  T
];
