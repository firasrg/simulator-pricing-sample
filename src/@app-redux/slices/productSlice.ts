import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '@forms/ProductForm';
import { RootState } from '@app-redux/models';
import { clearData } from '@app-redux/slices/authSlice';

interface IStateProduct {
  list: IProduct[];
  selected: IProduct['name'] | null;
}

const initialState: IStateProduct = {
  list: [],
  selected: null
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.list = action.payload;
    },
    selectProduct: (state, action) => {
      state.selected = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(clearData, () => initialState);
  }
});

export const { setProductList, selectProduct } = productSlice.actions;
export const product = (state: RootState) => state.product;

export default productSlice.reducer;
