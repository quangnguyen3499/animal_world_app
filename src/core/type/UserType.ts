import { User } from '../entity';

export type UserState = {
  isLoading: boolean;
  isLogged: boolean;
  username: string;
};
