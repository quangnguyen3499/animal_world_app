import { User } from '../entity';

export type UserState = {
  isLoading: boolean;
  isLogout: boolean;
  username: string;
};
