import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Aqicn, AqicnType } from '../types/Aqicn';
const initialState: AqicnType = {
  value: [],
  isLoaded: false,
  citys: ["London", "Budapest", "Warszawa", "Copenhagen", "Helsinki", "Paris", "Madryd", "Berlin"]
}
export const aqicnEuropeSlice = createSlice({
  name: 'europe',
  initialState,
  reducers: {
    getEuropeAqi: (state, action:PayloadAction<Array<Aqicn>>) => {
        state.value = action.payload
    },
    getEuLoaded: (state, action:PayloadAction<boolean>) => {
        state.isLoaded = action.payload
    },
  },
})
export const { getEuropeAqi, getEuLoaded } = aqicnEuropeSlice.actions
export default aqicnEuropeSlice.reducer