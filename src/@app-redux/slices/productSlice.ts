import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app-redux/models';
import { clearData } from '@app-redux/slices/authSlice';
import { IProduct } from '@models/IProduct';

interface IStateProduct {
  list: IProduct[];
}

const initialState: IStateProduct = {
  list: []
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.list = action.payload;
    },
    deleteProduct: (state, action) => {
      state.list = state.list.filter((p) => p.name !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(clearData, () => initialState);
  }
});

export const { setProductList, deleteProduct } = productSlice.actions;
export const product = (state: RootState) => state.product;

export default productSlice.reducer;
