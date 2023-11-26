import React from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { useAppDispatch, useAppSelector } from '@app-redux/reduxHooks';
import { auth as selectAuth, signIn, signOut } from '@app-redux/slices/authSlice';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAppSelector(selectAuth);

  const dispatch = useAppDispatch();

  const signin = (username: string, navigationCallback: VoidFunction) => {
    dispatch(signIn(username));
    navigationCallback();
  };

  const signout = (navigationCallback: VoidFunction) => {
    dispatch(signOut());
    navigationCallback();
  };

  const value = { ...auth, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
