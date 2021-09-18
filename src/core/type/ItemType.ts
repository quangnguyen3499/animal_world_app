import { Item } from '@core';

export type ItemState = {
  isLoading: boolean;
  data: Array<Item>;
  error: object;
};