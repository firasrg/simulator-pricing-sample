import { Action, ThunkAction } from '@reduxjs/toolkit';
import { store } from '@app-redux/storeSetup';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
