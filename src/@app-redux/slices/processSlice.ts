import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app-redux/models';
import { clearData } from '@app-redux/slices/authSlice';
import { IProcess } from '@models/IProcess';

export interface IStateProcess {
  list: IProcess[];
}

const initialState: IStateProcess = {
  list: []
};

export const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    setProcessList: (state, action) => {
      state.list = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(clearData, () => initialState);
  }
});

export const { setProcessList } = processSlice.actions;
export const process = (state: RootState) => state.process;

export default processSlice.reducer;
