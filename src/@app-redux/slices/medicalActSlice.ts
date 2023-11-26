import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@app-redux/models";
import {clearData} from "@app-redux/slices/authSlice";
import {IMedicalAct} from "@lists/MedicalActsList";

interface IStateMedicalAct {
    list: IMedicalAct[]
}

const initialState: IStateMedicalAct = {
    list: [],
}

export const medicalActSlice = createSlice({
    name: 'medicalAct',
    initialState,
    reducers: {
        setMedicalActList: (state, action) => {
            state.list = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(clearData, () => initialState);
    }
})

export const { setMedicalActList } = medicalActSlice.actions;
export const medicalAct = (state: RootState) => state.medicalAct;

export default medicalActSlice.reducer;