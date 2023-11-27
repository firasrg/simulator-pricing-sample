import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app-redux/models';
import { clearData } from '@app-redux/slices/authSlice';
import { IGuarantee } from '@forms/guarantee/reducer';

interface IStateGuarantee {
  list: IGuarantee[];
}

const initialState: IStateGuarantee = {
  list: []
};

export const guaranteeSlice = createSlice({
  name: 'guarantee',
  initialState,
  reducers: {
    setGuaranteeList: (state, action) => {
      state.list = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(clearData, () => initialState);
  }
});

export const { setGuaranteeList } = guaranteeSlice.actions;
export const guarantee = (state: RootState) => state.guarantee;

export default guaranteeSlice.reducer;
