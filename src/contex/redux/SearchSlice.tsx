import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Data {
    uid: number;
    aqi: number;
    time: string[];
    station: {
        name: string;
        country: string;
    }
}
type InitialType = {
    result: Array<Data>;
}
const initialState:InitialType = {
    result: [],
}
export const searchSlice = createSlice({
    name: 'searchResult',
    initialState,
    reducers: {
        resultList: (state, action:PayloadAction<Array<Data>>) => {
            state.result = action.payload
        }
    }
});
export const { resultList } = searchSlice.actions;
export default searchSlice.reducer