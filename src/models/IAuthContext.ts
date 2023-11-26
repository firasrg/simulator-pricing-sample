import { IStateAuth } from '@app-redux/slices/authSlice';

export interface IAuthContext extends IStateAuth {
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}
