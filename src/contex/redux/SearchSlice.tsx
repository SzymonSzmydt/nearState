import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Data {
    uid: number;
    aqi: number | string;
    time: string[];
    station: {
        name: string;
        country: string;
    }
}
type InitialType = {
    result: Array<Data>;
    error: boolean;
}
const initialState:InitialType = {
    result: [],
    error: false
}
export const searchSlice = createSlice({
    name: 'searchResult',
    initialState,
    reducers: {
        resultList: (state, action:PayloadAction<Array<Data>>) => {
            state.result = action.payload
        },
        error: (state, action:PayloadAction<boolean>) => {
            state.error = action.payload
        }
    }
});
export const { resultList, error } = searchSlice.actions;
export default searchSlice.reducer