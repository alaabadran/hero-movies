export type AsyncReturnType<T extends (..._args: any) => Promise<any>> =
  Awaited<ReturnType<T>>;

export type ApiRes<T> = {
  success: boolean;
  response: T;
  message?: string;
};
