import { createAction, createReducer } from '@reduxjs/toolkit';
import { EMPTY_ARRAY, NULL_VALUE, ZERO_VALUE } from '@constants/values';

export interface IGuarantee {
  name: string | null;
  description?: string;
  selectedActs: string[];
  pricing: Pricing;
  age: Age;
}

export enum EPricing {
  BASE = 'base',
  PARTNER = 'partner',
  CHILD = 'child'
}

export enum EAge {
  MIN = 'min',
  MAX = 'max'
}

export type Pricing = {
  [EPricing.BASE]: number;
  [EPricing.PARTNER]?: number;
  [EPricing.CHILD]?: number;
};

type Age = {
  intervalStep: number;
  [EAge.MAX]?: number;
  [EAge.MIN]?: number;
};

type ActionSetPricingPayload = {
  target: EPricing;
  amount: number;
};

type ActionSetAgeIntervalPayload = Pick<Age, EAge.MIN | EAge.MAX>;

// actions
const GUARANTEE = 'guarantee';

export const setName = createAction<string>(`${GUARANTEE}/setName`);
export const setDescription = createAction<string>(`${GUARANTEE}/setDescription`);
export const setActs = createAction<string[]>(`${GUARANTEE}/setActs`);
export const setPricingAmount = createAction<ActionSetPricingPayload>(`${GUARANTEE}/setPricingAmount`);
export const setAgeInterval = createAction<ActionSetAgeIntervalPayload>('guarantee/setAgeInterval');
export const setAgeFootStep = createAction<number>('guarantee/setAgeFootStep');

export const initialState: IGuarantee = {
  name: NULL_VALUE,
  selectedActs: EMPTY_ARRAY,
  pricing: {
    [EPricing.BASE]: ZERO_VALUE
  },
  age: {
    intervalStep: 5
  }
};

const guaranteeFormReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setName, (state, action) => {
      state.name = action.payload;
    })
    .addCase(setDescription, (state, action) => {
      state.description = action.payload;
    })
    .addCase(setActs, (state, action) => {
      state.selectedActs = action.payload;
    })
    .addCase(setPricingAmount, (state, action) => {
      const { target, amount } = action.payload;

      state.pricing[target] = amount;
    })
    .addCase(setAgeInterval, (state, action) => {
      const newAge = action.payload;

      state.age = { ...state.age, ...newAge };
    })
    .addCase(setAgeFootStep, (state, action) => {
      state.age = {
        ...state.age,
        intervalStep: action.payload
      };
    });
});

export default guaranteeFormReducer;
